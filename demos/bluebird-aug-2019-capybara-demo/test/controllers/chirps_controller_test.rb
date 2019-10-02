require 'test_helper'

class ChirpsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get chirps_index_url
    assert_response :success
  end

end
