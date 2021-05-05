class ApplicationController < ActionController::Base
    # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :set_connected_user, :get_connected_user, :get_connected_user_info, :is_connected, :humanize_date,:set_nbre_connexion, :get_nbre_connexion
  helper_method :set_reinit_user, :is_authorised

  helper_attr :set_connected_user, :get_connected_user, :get_connected_user_info, :is_connected, :humanize_date,:set_nbre_connexion, :get_nbre_connexion
  helper_attr :set_reinit_user, :is_authorised

  attr_accessor :get_connected_user, :get_connected_user, :get_connected_user_info, :is_connected, :humanize_date,:set_nbre_connexion, :get_nbre_connexion
  attr_accessor :get_reinit_user, :is_authorised


  #set connected user email
  def set_connected_user(email)
    session[:sos_note_email] = email
  end

  # get connected user email
  def get_connected_user
    session[:sos_note_email]
  end

  #set connected user info
  def set_connected_user_info(info)
    session[:sos_note_usr_info] = info
  end

  # get connected user info
  def get_connected_user_info
    session[:sos_note_usr_info]
  end


  #tell if a user is connected or not
  def is_connected
    begin
      if session.key?(:sos_note_email)
        true
      else
        false
      end
    rescue Exception => e 
      false
    end
  end


  #set connected user kcode
  def set_nbre_connexion(val)
    session[:sos_note_nbre_connexion] = val
  end

  # get connected user kcode from
  def get_nbre_connexion
    session[:sos_note_nbre_connexion]? session[:sos_note_nbre_connexion] : 0
  end
end
