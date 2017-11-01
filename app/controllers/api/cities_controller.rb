class Api::CitiesController < ApplicationController

  def index
    @cities = City.all
    render json: @cities
  end

  def show
    @city = City.includes(:posts).order('posts.created_at Desc').find(params[:id])
    render json: @city, include: [:posts]
  end
end
