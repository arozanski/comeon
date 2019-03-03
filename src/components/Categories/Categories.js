import React from 'react';
import Category from './Category/Category';
import Aux from '../../hoc/Aux';
import Header from '../UI/Header/Header';

const categories = (props) => {
    return (
        <Aux>
            <Header classes="ui dividing header" type="h3" text="Categories" />
                <div className="ui selection animated list category items">
                {props.categories.map(category => 
                    <Category key={category.id} item={category} onClickHandler={props.onCategoryFilterHandler}/>)}
            </div>
        </Aux>
    );
}

export default categories;