Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "user#home" 

  #routes for website
  get 'dashboard' => 'user#index'
  get 'qui_sommes_nous' => 'user#qui_sommes_nous'
  get 'pourquoi_nos_services' => 'user#pourquoi_nos_services'
  get 'notre_fonctionnement' => 'user#notre_fonctionnement'
  get 'documents_administratifs' => 'user#documents_administratifs'
  get 'documents_personnels' => 'user#documents_personnels'



  #routes for users
  get 'login' => 'user#login'
  get 'logout' => 'user#login'
  get 'sign_up' => 'user#sign_up'

  post 'login/' => 'user#processLogin'



  #routes for demandes
  get 'nouvelle_demande' => 'demande#nouvelle_demande'
  get 'mes_demandes' => 'demande#mes_demandes'
  get 'mes_documents' => 'demande#mes_documents'

  #routes for factures
  get 'mes_factures' => 'facture#mes_factures'
  get 'detail_facture' => 'facture#detail_facture'


  get 'stack/:page' => 'stack#show', as: 'stack'
  
end
