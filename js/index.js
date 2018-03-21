
let data = `
Ezira offers everyone Freedom, Transparency, and Community. It is a new platform to help everybody to share information and value freely.
Ezira is a distributed Social media and business platform. That means it will let everybody post anything they want to, trade any digital property, and create any digital businesses that they can imagine. Ezira is owned and operated by users. People that have powerful computers can earn rewards for running the Ezira network. Everybody that posts to Ezira will also earn rewards, depending on the amount of votes they earn from their community of viewers.
Ezira pays its users rewards using a special type of digital money called EziraCoin. Users can purchase EZIRA, or commit to holding their EziraCoin for a longer time are able to earn interest on their savings, and hold more voting power by converting it into EziraPower.
EziraCoin is a new type of valuable currency, that is secured by its users on their own computers. Users that hold more value on the Ezira network by earning or purchasing EziraCoin and have more voting influence. A certain amount of EziraCoin is generated every year and divided between everyone that works to help Ezira grow and thrive. Anybody can earn EziraCoin and manage it using their Ezira account. Nobody except the owner of an account can take or spend its EziraCoin without permission. Nobody can create new EziraCoin unless they contribute valuable time and resources to the network. Every owner of EziraCoin can send them to other people for free, almost instantly. If you need to send money privately without everyone seeing where it is going, you can send it to another user secretly, using EziraStealth. Ezira users can choose whether to use an account that is linked to their real-world identity to create a great reputation, to choose a nickname and post without revealing their real world identity, or to post without using any name at all.
Ezira helps everyone by sharing EziraCoin widely and fairly. Everybody that already has some of the most important types of digital money will be given a small amount of EZIRA, which represents ownership of the network. Holders of this type of money will earn a small amount of all EziraCoin that are ever created. This is to reward them for owning a piece of the platform. Everybody that uses Ezira each day will earn a small amount of EziraCoin for being a part of the community.
You can upload posts to Ezira of anything you want. You can post pictures, videos, music, books, software or any other files, and they will be saved and secured. Your posts can be listed on a board for the subject you want to talk about, and can
bring people together to make a digital community. You get to choose who will be able to see them. If you select to post it publicly, it will always be available to everyone, forever. If you post it privately, only the people you choose can view them. When you upload something, the people that see it can vote on it if they think it is good. The more people see your post, and think your post is good, the more rewards it will earn. People can even pay you money to unlock a special part of your post that you choose, and pay you tips directly if they think it is really good. This lets everybody earn money from their posts, without needing to rely on advertisers.
EziraCoin can be used to pay for anything you want to buy. You can buy other types of digital money on Ezira’s trading system. You can even make your own new digital money and use it to represent anything you want. You can make a new type of digital money named after your company, or your project, and sell it to raise funds to help you achieve your goals. Your digital money can then be traded on Ezira by everyone, and used to allow your supporters to have a say in your decisions. You can automatically deduct a small amount of all the money you receive, and use it to pay rewards to your supporters, or even buy back your money from the exchange to repay them a fixed amount. This lets everybody make and trade their own assets, without requiring a big company to act as everybody’s middleman.
You can buy and sell products on Ezira’s marketplace. You can make a special account to represent your business, and list products that you want to offer customers. If you want some trustworthy people to secure your purchases, you can pay a small fee and have an independent person act as a middleman for the money, and make sure the trade is done correctly by both people. This makes sure that the buyer and the seller uphold their end of the bargain, without needing a big company to act as everybody’s middleman.
The community chooses who the representatives of Ezira are. Everyone that holds voting power gets to choose the people that make the network operate. Anyone can become a part of the leading team of Ezira, by providing valuable services to the community, and campaigning to be elected. This encourages very skilled people to help Ezira grow and thrive, and rewards them for their important work. This means that anybody from any country can take an active role in the progress and services made available, and that the most passionate, hardworking, and skilled people are always able to rise to the top, regardless of the hiring policies and internal politics of any single company.
Ezira is different from the other social media networks you are used to. Big social networks are run on powerful computers owned by a single company. They control everyone’s information, and can access all the private things you store on their websites. They make large amounts of money by using this information to choose which advertisements to show you. They deliberately make the website in such a way that is proven to maximise the amount of time you spend there, instead of showing you important and valuable content quickly. They usually do not pay you for uploading content, even though you are adding value to their website, and earning them money. With Ezira, everybody earns money for contributing to the community, and the files uploaded are stored securely, so that only you and the people you choose can read them. They are copied, sliced up, and spread out across the world on computers owned by many individuals, so that no one person can access private information without your permission, or stop you from posting content that they disagree with. Your Ezira account can never be banned or suspended from posting, no matter what views and opinions you have.
The Ezira platform earns money in a new and fair way. Big Social media companies try to keep you watching and browsing for as long as possible and target ads to cater to every piece of information they have about you. With Ezira, your information is completely private, and promoted posts are targeted only to your public profile information. Everyone at Ezira can purchase a membership to disable promoted posts, and support the Ezira network directly. You earn access to account benefits, fee discounts, and increased voting influence.
Anyone can promote their posts and gain additional exposure for their content, or their business. The digital trading platforms have small trading fees, and special content payments have a small fee. The money that Ezira earns is returned directly to the platform’s users, by buying EziraCoin, lowering its supply, and increasing its price. This increases the earnings of every Ezira user.
Cutting edge technology is used to run Ezira. It allows every user of the platform to be able to see all the actions that take place and see the balances of all the people that earn from Ezira. This ensures that the platform is very transparent, and everybody can verify the flow of funds. The account used by the elected leaders of the platform to guide Ezira shows all payments it sends and receives to everybody. Everybody in Ezira is incentivised to work in the long term best interest of the platform, and those that are chosen by voters to act as representatives are accountable to all the users, all the time.
Learn more at: www.ezira.io

Find Ezira on all major social media platforms
t.me/EziraNetwork
twitter.com/EziraNetwork
reddit.com/r/ezira
medium.com/Ezira
facebook.com/EziraNetwork
steemit.com/trending/ezira
https://discord.gg/XhbGfrd
Ezira
`
data = data.replace(/[^a-zA-Z ]/g, "").toLowerCase();
data = data.split(" ");
let htmlString = "";
for(let i = 2; i < data.length; i++){
  let phrase = `${data[i-2]} ${data[i-1]} ${data[i]}`;
  htmlString += `
<li class="collection-item">
<input type="checkbox" class="filled-in" id="filled-in-box-${i-2}"/>
<label for="filled-in-box-${i-2}"><span class="teal-text">${phrase}</span></label>
</li>
`
}
let savedData = "";
if(localStorage.getItem("selected") != null){
  savedData = `<a href="#" id="savedData">Saved Data</a>`; 
}
let content = `
<div class="card-content">
              <span class="card-title white-text">Choose Options</span>
              <p class="white-text">Choose any options that you like and then click submit.</p>
              <br/>
    <ul class="collection ">
      ${htmlString}
    </ul>
            </div>
            <div class="card-action">
              <a href="#" id="send">Submit my selection</a>
              ${savedData}
            </div>
`
let card = document.querySelector(".card");
card.innerHTML = content;
let sendbtn = document.querySelector("#send");
let selectedPhrase = [];

sendbtn.addEventListener("click",function(){
  //get all the checked checkBoxes
  let checkboxes = document.querySelectorAll("input");
  checkboxes.forEach(function(checkbox){
    if(checkbox.checked == true){
      selectedPhrase.push(checkbox.parentElement.outerText);
    }
  });
  let submittedItems = "";
  selectedPhrase.forEach(function(phrase){
    submittedItems += `
    <li class="collection-item">
    <span class="teal-text">${phrase}</span>
    </li>
  `
  });
 
  let submittedContent = `
  <div class="card-content">
    <span class="card-title white-text">These are your selected items</span>
    <p class="white-text">Choose any options that you like and then click submit.</p>
    <br/>
    <ul class="collection ">
      ${submittedItems}
    </ul>
  </div>
  <div class="card-action">
    <a href="#" id="save">save</a>
    <a href="#" id="goBack">Go back</a>
  </div>
  `

  document.querySelector(".card").innerHTML = submittedContent;
  document.querySelector("#goBack").addEventListener("click",function(){
    location.reload();
  })
  document.querySelector("#save").addEventListener("click",function(){
    localStorage.setItem("selected",JSON.stringify(selectedPhrase));
    alert("Data is saved!")
  })
})

if(localStorage.getItem("selected") != null){
  document.querySelector("#savedData").addEventListener("click",function(){
    let savedData = JSON.parse(localStorage.getItem("selected"));
    if(savedData){
      let submittedItems = "";
    savedData.forEach(function(phrase){
      submittedItems += `
      <li class="collection-item">
      <span class="teal-text">${phrase}</span>
      </li>
    `
    });
   
    let submittedContent = `
    <div class="card-content">
      <span class="card-title white-text">These are your selected items</span>
      <p class="white-text">Choose any options that you like and then click submit.</p>
      <br/>
      <ul class="collection ">
        ${submittedItems}
      </ul>
    </div>
    <div class="card-action">
      <a href="#" id="goBack">Go back</a>
    </div>
    `
  
    document.querySelector(".card").innerHTML = submittedContent;
    document.querySelector("#goBack").addEventListener("click",function(){
      location.reload();
    })
    } else {
      let submittedContent = `
    <div class="card-content">
      <span class="card-title white-text">These is no saved data</span>
      <br/>
    </div>
    <div class="card-action">
      <a href="#" id="goBack">Go back</a>
    </div>
    `
    document.querySelector(".card").innerHTML = submittedContent;
    document.querySelector("#goBack").addEventListener("click",function(){
      location.reload();
    })
    }
    
  })
}

