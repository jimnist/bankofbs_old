# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require(File.join(File.dirname(__FILE__), 'config', 'boot'))

require 'rake'
require 'rake/testtask'
require 'rake/rdoctask'

require 'tasks/rails'

##
# tasks for maintaining and deploying this jekyll site
#
# adapted and simplified from:
#    http://davidwparker.com/2009/12/01/my-jekyll-rake-file/
#
# relies on public key being set up for the user on the host

namespace :jekyll do

  desc "build and run the site locally"
  task :run => :build do
    puts "running server locally"
    system('jekyll --server')
  end

  desc "build generated content locally"
  task :build => :delete do
    puts "building public site"
    system('compass')
    system('jekyll')
  end

  desc "deletes public"
  task :delete do
    puts "deleting public"
    system('rm -r public')
    puts "deleting public complete"
  end

  namespace :dev do

    desc "run compass watching for changes"
    task :compass do
      system("compass --watch")
    end

    desc "run jekyll server watching for changes"
    task :jekyll do
      system("jekyll --server --auto")
    end

  end

end