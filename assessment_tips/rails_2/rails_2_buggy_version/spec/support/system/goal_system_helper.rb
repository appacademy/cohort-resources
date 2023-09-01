module GoalSystemHelper
  def make_goal_for_user(user, name = 'Laundry', details = 'Clean all the Clothes!', status = 'true')
    visit user_url(user)
    fill_in 'Name', with: name
    fill_in 'Details', with: details
    choose(option: status)
    click_button 'Create Goal'
  end

  def make_goal_for_jack(name, details, status)
    jack = User.find_by(username: 'jack_bruce')
    make_goal_for_user(jack, name, details, status)
  end

  def get_jack
    User.find_by(username: 'jack_bruce')
  end
end
