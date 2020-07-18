let homePics=["hc1.jpg","hc2.jpg","hc3.jpg","hc4.jpg","hc5.jpg","hc6.jpg","hc7.jpg","hc8.jpg"];
let productpics=["pc1.jpg","pc2.jpg","pc3.jpg","pc4.jpg","pc5.jpg"]


$("#home").on("click",function()
{
  $("#myCarousel").show();
  $(".page").html("")

})
$("#products").on("click",function()
{
   
  $(".page").html("")
  $(".page").append("<div clas='main-div'><h1>Products and Businesses</h1><p class='bc'>Kohli is a leading, internet products company that builds innovative, mass-market, Web 2.0 products and services used by users worldwide.</p><div class='prod'></div><hr/><div class='bus'></div><hr/></div>")
  $(".prod").append("<h1>Our Products</h1><div class='prodContent'><div>");
  $(".prodContent").append('<h3>Our Product Portfolio Includes</h3><ul></ul>')
  $(".prodContent ul").append('<li>Web & Desktop Applications</li><li>Call Center Services</li><li>Web Services Viz.: Domain Regsitration and Web Hosting.</li><li>SMS Gateway</li><li>Hosted IVR Solutions</li><li>Social Networking Software</li><li>Internet & Outdoor Advertising</li><li>Brand Marketing</li><li>Event Management and much more</li>')
   $(".bus").append("<h1>Our Business Units</h1><div class='busContent'><div>");
   $(".busContent").append('<p>The Kohli consists of several different Business Units:</p><div class="bc bc1"></div><div class="bc bc2"></div><div class="bc bc3"></div><div class="bc bc4"></div><div class="bc bc5"></div><div class="bc bc6"></div>');
   $(".bc1").append('<h4><a href="http://www.livedesk.pro/">LIVE DESK/</a></h4><img src="pi1.png" alt="" /><p>LiveDesk offers outsourcing services in India & worldwide.Our Product portfolio includes Call Center Services, Live Chat Agents, Virtual Assistants, Inbound & Outbound Processes, KPO Services, etc.</p>');
   $(".bc2").append('<h4><a href="https://www.kohlihosting.com/"> KOLI HOSTING/</a></h4><img src="pi2.png" alt="" /><p>Kohli Hosting is a leading web services provider to Individuals, SMEs, Corporates, Non-Profit & Government Organizations, and Educational Institutions worldwide.Our Product portfolio includes Domain Registration, Windows/Linux Web Hosting, Email Hosting, SSL Certificates, Private Label Reseller Programs, etc. Our Products/Services are indigenously developed.</p>');
   $(".bc3").append('<h4><a href="https://www.kohliwebdesign.com/">KOHLI WEBDESIGN/</a></h4><img src="pi3.png" alt="" /><p>Kohli WebDesign started in 2004 by Sahil Kohli as a Hobby and today, we are one of the leading WebDesigning Company based in Gujarat. We specializes in web design and development, but we also place a lot of focus on marketing web sites and businesses.Our Product portfolio includes Logo Design, Brand Building, Banner Designing, CD Presentation, Word Templates, SEO (Search Engine Optimization), Traffic Building, Link Exchange, Email & SMS Marketing, Telemarketing, WebDesign, WebDevelopment, Website Redesigning, eCommerce Solution, Joomla & Drupal CMS, Flash Intros, Flash Banners, PHP and MySQL, ASP.net Applications, and Blogs.</p>');
   $(".bc4").append('<h4><a href="http://www.kohliconnect.com/">KOHLI CONNECT</a></h4><img src="pi4.png" alt="" /><p>Kohli Connect (foremely known as Kohli SMS Service) is a leading Interactive SMS & Voice Solutions provider. We help enterprises leverage the high growth in the mobile market by running an end-to-end mobile campaign. We also develop customized applications using Kohli Connect\'s API.Our Product portfolio includes Bulk SMS as low as 3paisa, Keyword on Short Codes (56677, 54545, 56070 and 57575), Incoming Call Service,Outbound Call Service, Voice Broadcast, Email to Fax & vice-versa, and Hosted IVR Solutions.</p>');
   $(".bc5").append('<p>Our latest Facebook Application for sending Free SMS in India is a remarkable milestone for Kohli. We are soon coming up with more of free stuffs on kohlimail.com with support of Kohli WebDesign.</p>');
   $(".bc6").append('<p></p>');

})
