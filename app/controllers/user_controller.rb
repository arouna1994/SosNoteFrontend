class UserController < ApplicationController
    def home 
      render layout: "stack/template"
    end

    def qui_sommes_nous
      render layout: "stack/template"
    end

    def pourquoi_nos_services
      render layout: "stack/template"
    end

    def notre_fonctionnement
      render layout: "stack/template"
    end

    def documents_administratifs
      render layout: "stack/template"
    end

    def documents_personnels
      render layout: "stack/template"
    end



    def index
        begin
            if !is_connected
                redirect_to controller: :user ,action: :login
            else
                result = Array.new
                result = HTTP.headers(:accept => "application/json")
                            .timeout(:write => 4, :connect => 10, :read => 15)
                            .get(ENV["BASE_URL_BACKEND"]+"/api/v1/infoUser?format=json&email="+get_connected_user)
                parsed_json = ActiveSupport::JSON.decode(result.body)
                if(parsed_json["success"])
                    set_connected_user(parsed_json["email"])
                    set_connected_user_info(parsed_json)
                else
                    redirect_to controller: :user ,action: :login
                end
            end
            render layout: "stack/application"
        rescue Exception => e
          puts "----------------------------------"
          puts e.to_s
          puts "----------------------------------"
          #redirect_to controller: :error ,action: :render_500
        end
    end 



    def logout
        
    end


    def login
        begin
            if request.original_fullpath.to_s.include?("logout")
              if(is_connected)
                result = Array.new
                result = HTTP.headers(:accept => "application/json")
                             .timeout(:write => 4, :connect => 10, :read => 15)
                             .post(ENV["BASE_URL_BACKEND"]+"/api/v1/logout?format=json", :form => {:email => get_connected_user})
                parsed_json = ActiveSupport::JSON.decode(result.body)
              end
              reset_session
            else
              #if(!is_connected)
                #reset_session
              #end
            end
            render layout: "stack/login"
        rescue Exception => e
            puts "--------------------------------"
            puts e.to_s
            puts "--------------------------------"
        end
    end


    def processLogin
        begin
            result = Array.new
            result = HTTP.headers(:accept => "application/json")
                       .timeout(:write => 4, :connect => 10, :read => 15)
                       .post(ENV["BASE_URL_BACKEND"]+"/api/v1/login?format=json", :form => {:email => params[:email],:password => params[:password]})
            parsed_json = ActiveSupport::JSON.decode(result.body)
            if(parsed_json["success"])
              set_connected_user(parsed_json["email"])
              set_connected_user_info(parsed_json)
              set_nbre_connexion(0)
            else
              set_nbre_connexion(get_nbre_connexion+1)
            end
      
            if (get_nbre_connexion >= 3)
              result = {
                  :success => false,
                  :code => "403",
                  :message => "Votre compte a été désactivé pour une durée d'une heure",
                  :num => get_nbre_connexion
              }
              render :json => result.to_json
            else
              render :json => parsed_json
            end
          rescue Exception => e #something wrong
            result = {
                :success => false,
                :code => "500",
                :message => e.to_s,
                :num => get_nbre_connexion
            }
            render :json => result.to_json, :status => 200
          end
    end




    def sign_up
        render layout: "stack/login"
    end
end
