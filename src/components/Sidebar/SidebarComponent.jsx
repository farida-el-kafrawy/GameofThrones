import React from 'react'
import './SidebarComponent.css';
import { Button, RadioButtonGroup, RadioButton
} from '@brandwatch/axiom-components';

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
        <div className={'buttons'}> 
      <Button
        variant="primary"
        size="large"
        onClick={() => alert("primary clicked")}
      >
     search
      </Button>
    </div>
        I'm the sidebar component
        <form className="search-bar"> 
        <input type="text" id="search" name="search" placeholder="Enter search..."/>
        </form>
<ul>
    <li>Home</li>
    <li>Houses</li>
    <li>Characters</li>
    <li>Books</li>
</ul>
    
    </div>
};