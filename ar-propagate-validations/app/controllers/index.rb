get '/' do
  @events = Event.all
  erb :index
end

post '/events/create' do
  puts params
  event = Event.create(params[:event])
  erb :_event_short, { layout: false, locals: { event: event } }
end

get '/events/:id/show' do |id|
  event = Event.find(id)
  erb :_event_show, { layout: false, locals: { event: event } }
end
