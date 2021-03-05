import React from 'react'
import './SidebarComponent.css';


// TODO - make sure SidebarComponent is expecting the right props!
export const SidebarComponent = () => {
   
    // TODO - reflect expanded/collapsed state in sidebar's className
    // TODO - make sure the classNames in the SidebarComponent.css match up with the classes you choose!
    return <div className={'sidebar'}>
        {
        /* TODO - flesh out this component to include all controls for configuring your data retrieval.
             This must include the category (books/characters/houses)
             [STRETCH] Feel free to add anything else you want, for example:
                * a dropdown to select number of items you want to retrieve
                * a search bar to search for a particular item
             You could even change what you can see in the search bar based on what you are searching for.
             E.g add a dropdown to determine which field you're searching on ("name"/"title"/"alias")
        */} 
       
        I'm the sidebar component
        <div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <form className="search-bar"> 
        <input type="text" id="search" name="search" placeholder="Enter search..."/>
        </form>
  <a href="#">Home</a>
  <a href="#">Houses</a>
  <a href="#">Books</a>
  <a href="#">Characters</a>
  
</div>

<div id="main">
  <button class="openbtn" onclick="openNav()">&#9776; Open Sidebar</button>
  <h2>Collapsed Sidebar</h2>
  <p>Content...</p>
</div>


    </div>
};