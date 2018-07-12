$(document).ready(function() 
{  
  $.ajax( 
  {
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: "https://newsapi.org/v2/everything?q=microbiota&apiKey=e535d15a6a5c43a1be18fc4505ca23e5",
      success: function(data) 
      {
        for (var i = 0; i < 5; i++)
        {
          $("#news").append(
            "<div class='title'><a target='_blank' href='" 
                + data.response.results[i].url + "'>" 
                + data.response.results[i].title + " | "  + "</a></div>");

          $("#news").append(
            "<img class='img'><a target='_blank' href='" 
                + data.response.results[i].urlToImage "</a></img>");
          
          $("#news").append("<br />");
        }
        console.log(data);
      }
  })
});