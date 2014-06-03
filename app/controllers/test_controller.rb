class TestController < ApplicationController
  def test

    #create node
    #query = { :query => 'CREATE (n:Person { name : {name} , vacile: {bacile} }) RETURN n',
    #                 :params => {
    #                     :name => 'otromas mas2',
    #                     :bacile => 'efectivo2'
    #                 }
    #}

    #find node by name
    #query = { :query => 'MATCH (n:Person { name : {name} }) RETURN n',
    #          :params => {
    #              :name => 'calomi',
    #              #:bacile => 'efectivo2'
    #          }
    #}
    #response = cypher_request query
    #puts "hey coleot"
    #puts response.to_s
    #node = JSON.parse(response.body)['data'][0][0]['data']
    #@colo = node.to_s

    #node = find_person_with_name "camilo barraza"
    #if node.nil?
    #  @colo ="no hay"
    #else
    #  @colo = node.to_s
    #end
    #@result = find_person_with_name "camilo barraza"

    #@result = httpartyGetTest "http://newdb.sb01.stations.graphenedb.com:24789/db/data/node/5/labels"
    #puts "loco"
    #puts @result.to_s
    #@colo = @result
    #puts " dbug label"
    #puts @result

    @result = get_all_nodes
    @colo = @result
    #puts" ultimo"
    #puts @result.to_s
    #remove_all_nodes
  end

  def get_all_nodes
    query = { :query => 'START n=node(*) RETURN n;',
              :params => {
                  #:name => name.to_s,
              }
    }
    response = cypher_request query
    puts "pilla hey"
    puts  response.to_s
    json_obj = JSON.parse(response.body)
    json_obj['data']
  end

  def label_request ( query )
    @url_post = "http://newdb.sb01.stations.graphenedb.com:24789/db/data/node/11/relationships/out"
    auth = {:username => "newdb", :password => "gubWBXtzcii5nS5eJY6C"}
    @result= HTTParty.post(@url_post.to_s,
                           :body => query.to_json,
                           :headers => { 'Content-Type' => 'application/json' } ,
                           :basic_auth => auth)
  end

  def remove_all_nodes
    query = { :query => 'START n=node(*) OPTIONAL MATCH n-[r]-() DELETE n, r;',
              :params => {
                  #:name => name.to_s,
              }
    }
    cypher_request query
  end

  def find_person_with_name name
    query = { :query => 'MATCH (n:Person { name : {name} }) RETURN n',
              :params => {
                  :name => name.to_s,
              }
    }
    response = cypher_request query
    json_obj = JSON.parse(response.body)
    puts "dbug 34"
    puts json_obj.to_s
    if !json_obj['data'][0].nil?
      node = json_obj['data']
    else
      nil
    end
  end

  def httpartyGetTest  g_request
    @auth = {:username => "newdb", :password => "gubWBXtzcii5nS5eJY6C"}
    @options = {}
    @options.merge!({:basic_auth => @auth})
    @url_get =  g_request
    @result = HTTParty.get  @url_get.to_s  ,  @options
    res = JSON.parse ( @result.body )
    res
  end

  def cypher_request ( query )
    @url_post = "http://ec2-54-187-169-247.us-west-2.compute.amazonaws.com:24789/db/data/cypher"
    auth = {:username => "newdb", :password => "gubWBXtzcii5nS5eJY6C"}
    @result= HTTParty.post(@url_post.to_s,
                           :body => query.to_json,
                           :headers => { 'Content-Type' => 'application/json' } ,
                           :basic_auth => auth)
  end

end
