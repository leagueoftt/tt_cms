require 'bundler/setup'
Bundler.require
require 'sinatra/reloader' if development?
require './models.rb'
require 'open-uri'
#require 'rack/flash3'
enable :sessions

get '/' do
    # @contents = Article.order('id desc').all
    @articles = Article.order('id desc').all
    erb :index
end

get '/sign_in' do
    erb :sign_in
end

post '/sign_in' do
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
        session[:user] = user.id
        redirect '/'
    else
        redirect '/sign_in'
    end
end


get '/sign_up' do
    erb :sign_up
end

post '/sign_up' do

    if params[:password] == params[:password_confirm]
         @user = User.create( name: params[:username], email: params[:email], password: params[:password])
    else

    end

    if @user != nil
        session[:user] = @user.id
    end
    redirect '/'
end

get '/sign_out' do
    session[:user] = nil
    redirect '/'
end

get '/articles/new' do
    erb :"articles/new"
end

post '/articles/create' do
  p params
  Article.create({
    title: params[:title],
    body: params[:body]
    })
  redirect '/'
end

get '/article/:id' do
    @article = Article.find(params[:id])
    erb :"articles/show"
end
