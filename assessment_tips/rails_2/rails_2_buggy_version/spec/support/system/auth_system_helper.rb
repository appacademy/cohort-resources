module AuthSystemHelper
  def register(username)
    visit '/users/new'
    fill_in 'Username', with: username
    fill_in 'Password', with: 'abcdef'
    click_button 'Sign Up'
  end

  def register_as_jack_bruce
    register('jack_bruce')
  end

  def sign_in(username)
    visit new_session_path
    fill_in 'Username', with: username
    fill_in 'Password', with: 'abcdef'
    click_button 'Sign In'
  end

  def sign_in_as_jack_bruce
    sign_in('jack_bruce')
  end
end
