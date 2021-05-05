class DemandeController < ApplicationController
    def nouvelle_demande
        params[:type_doc]? @doc = params[:type_doc].to_i : @doc = 0
        params[:type_doc]? @service = params[:service].to_i : @service = 0
        result = Array.new
        result = HTTP.headers(:accept => "application/json")
                    .timeout(:write => 4, :connect => 10, :read => 15)
                    .get(ENV["BASE_URL_BACKEND"]+"/api/v1/type_documents?format=json")
        parsed_json = ActiveSupport::JSON.decode(result.body)
        @type_documents = parsed_json
        @services = @type_documents["items"][@doc]["prestations"]


        @page = "appel_candidature_red_mef"
        if(@doc.eql?(2) && @service.eql?(0))
            @page = "biographie_red_mef" 
        end
        if(@doc.eql?(3) && @service.eql?(0))
            @page = "contrat_red_mef" 
        end
        if(@doc.eql?(4) && @service.eql?(0))
            @page = "cv_mef"  
        end
        if(@doc.eql?(4) && @service.eql?(1))
            @page = "cv_red" 
        end
        if(@doc.eql?(4) && @service.eql?(2))
            @page = "cv_red_mef" 
        end
        if(@doc.eql?(5) && @service.eql?(0))
            @page = "devis_red_mef" 
        end
        if(@doc.eql?(6) && @service.eql?(0))
            @page = "facture_red_mef" 
        end
        if(@doc.eql?(7) && @service.eql?(0))
            @page = "fiche_poste_red_mef" 
        end
        if(@doc.eql?(8) && @service.eql?(0))
            @page = "lettre_motivation_form_mef"
        end
        if(@doc.eql?(8) && @service.eql?(1))
            @page = "lettre_motivation_form_red"
        end
        if(@doc.eql?(8) && @service.eql?(2))
            @page = "lettre_motivation_form_red_mef"
        end
        if(@doc.eql?(9) && @service.eql?(0))
            @page = "lettre_motivation_entr_mef"
        end
        if(@doc.eql?(9) && @service.eql?(1))
            @page = "lettre_motivation_entr_red"
        end
        if(@doc.eql?(9) && @service.eql?(2))
            @page = "lettre_motivation_entr_red_mef"
        end
        if(@doc.eql?(10) && @service.eql?(0))
            @page = "memoire_mef"
        end
        if(@doc.eql?(11) && @service.eql?(0))
            @page = "menu_restaurant_red_mef"
        end
        if(@doc.eql?(12) && @service.eql?(0))
            @page = "offre_financiere_red_mef" 
        end
        

        render layout: "stack/application"
    end




    def mes_demandes
        render layout: "stack/application"
    end



    def mes_documents
        render layout: "stack/application"
    end
end
