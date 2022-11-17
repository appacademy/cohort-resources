guard :rspec, cmd: 'spring rspec' do
  watch(%r{^app/}) { 'spec' }
  watch(%r{^spec/}) { 'spec' }
  watch('config/routes.rb') { 'spec' }
end