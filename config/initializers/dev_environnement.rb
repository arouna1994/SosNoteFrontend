if Rails.env.production?
    ENV['BASE_URL'] = "http://localhost:3001"
    ENV['BASE_URL_BACKEND'] = "http://localhost:3000"
  end
  
  if Rails.env.development?
    ENV['BASE_URL'] = "http://localhost:3001"
    ENV['BASE_URL_BACKEND'] = "http://localhost:3000"
  end
  
  
  if Rails.env.test?
    ENV['BASE_URL'] = "http://3.12.85.51:3001"
    ENV['BASE_URL_BACKEND'] = "http://3.12.85.51:3000"
  end