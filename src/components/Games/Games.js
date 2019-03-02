import React from 'react';

const games = () => (
    <div>
    <h3 className="ui dividing header">Games</h3>

                      <div className="ui relaxed divided game items links">

                          {/*<!-- game item template -->*/}
                          <div className="game item">
                              <div className="ui small image">
                                  <img src="" alt="game-icon"/>
                              </div>
                              <div className="content">
                                  <div className="header"><b className="name"></b></div>
                                  <div className="description">
                                  </div>
                                  <div className="extra">
                                      <div className="play ui right floated secondary button inverted">
                                          Play
                                          <i className="right chevron icon"></i>
                                      </div>

                                  </div>
                              </div>
                          </div>
                          {/*<!-- end game item template -->*/}
    </div>
    </div>
);

export default games;