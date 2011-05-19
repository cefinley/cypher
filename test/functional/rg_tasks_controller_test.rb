require 'test_helper'

class RgTasksControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:rg_tasks)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create rg_task" do
    assert_difference('RgTask.count') do
      post :create, :rg_task => { }
    end

    assert_redirected_to rg_task_path(assigns(:rg_task))
  end

  test "should show rg_task" do
    get :show, :id => rg_tasks(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => rg_tasks(:one).to_param
    assert_response :success
  end

  test "should update rg_task" do
    put :update, :id => rg_tasks(:one).to_param, :rg_task => { }
    assert_redirected_to rg_task_path(assigns(:rg_task))
  end

  test "should destroy rg_task" do
    assert_difference('RgTask.count', -1) do
      delete :destroy, :id => rg_tasks(:one).to_param
    end

    assert_redirected_to rg_tasks_path
  end
end
