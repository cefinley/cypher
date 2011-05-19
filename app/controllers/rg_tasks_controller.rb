class RgTasksController < ApplicationController
  # GET /rg_tasks
  # GET /rg_tasks.xml
  def index
    @rg_tasks = RgTask.all

    respond_to do |format|
      format.html # index.html.haml
      format.xml  { render :xml => @rg_tasks }
    end
  end

  # GET /rg_tasks/1
  # GET /rg_tasks/1.xml
  def show
    @rg_task = RgTask.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @rg_task }
    end
  end

  # GET /rg_tasks/new
  # GET /rg_tasks/new.xml
  def new
    @rg_task = RgTask.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @rg_task }
    end
  end

  # GET /rg_tasks/1/edit
  def edit
    @rg_task = RgTask.find(params[:id])
  end

  # POST /rg_tasks
  # POST /rg_tasks.xml
  def create
    @rg_task = RgTask.new(params[:rg_task])

    respond_to do |format|
      if @rg_task.save
        format.html { redirect_to(@rg_task, :notice => 'RgTask was successfully created.') }
        format.xml  { render :xml => @rg_task, :status => :created, :location => @rg_task }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @rg_task.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /rg_tasks/1
  # PUT /rg_tasks/1.xml
  def update
    @rg_task = RgTask.find(params[:id])

    respond_to do |format|
      if @rg_task.update_attributes(params[:rg_task])
        format.html { redirect_to(@rg_task, :notice => 'RgTask was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @rg_task.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /rg_tasks/1
  # DELETE /rg_tasks/1.xml
  def destroy
    @rg_task = RgTask.find(params[:id])
    @rg_task.destroy

    respond_to do |format|
      format.html { redirect_to(rg_tasks_url) }
      format.xml  { head :ok }
    end
  end
  
  def cronhelp
  end
  
end
