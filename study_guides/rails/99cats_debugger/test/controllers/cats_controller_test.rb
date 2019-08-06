require 'test_helper'

class CatsControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get cats_edit_url
    assert_response :success
  end

  test "should get index" do
    get cats_index_url
    assert_response :success
  end

  test "should get new" do
    get cats_new_url
    assert_response :success
  end

  test "should get show" do
    get cats_show_url
    assert_response :success
  end

end
