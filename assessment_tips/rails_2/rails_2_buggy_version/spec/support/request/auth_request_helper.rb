module AuthRequestHelper
  def log_in_as(user)
    post session_url, params: { 
      user: {
        username: user.username,
        password: user.password
      }
    }
  end
end
