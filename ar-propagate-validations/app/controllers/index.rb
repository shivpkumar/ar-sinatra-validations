get '/' do
  @events = Event.all
  erb :index
end

post '/events/create' do
  event = Event.create(params[:event])
  if event.valid?
    erb :_event_short, { layout: false, locals: { event: event } }
  else
    event.errors.full_messages.join('</br>')
  end
end

get '/events/:id/show' do |id|
  event = Event.find(id)
  erb :_event_show, { layout: false, locals: { event: event } }
end
