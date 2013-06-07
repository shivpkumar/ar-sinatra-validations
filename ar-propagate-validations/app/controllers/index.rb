get '/' do
  @events = Event.all
  erb :index
end

get '/events/:id/show' do |id|
  event = Event.find(id)
  erb :_event_show, { layout: false, locals: { event: event } }
end

get '/events/new' do
  #TODO IMPLEMENT ME
end

post '/events/create' do
  #TODO IMPLEMENT ME
end
