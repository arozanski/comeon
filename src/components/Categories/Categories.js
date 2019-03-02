import React from 'react';
import Category from './Category/Category';
import Aux from '../../hoc/Aux';

const categories = (props) => {
    return (
        <Aux>
            <h3 className="ui dividing header">Categories</h3>
                <div className="ui selection animated list category items">
                {props.categories.map(category => 
                    <Category key={category.id} item={category} onClickHandler={props.onCategoryFilterHandler}/>)}
            </div>
        </Aux>
    );
}

export default categories;