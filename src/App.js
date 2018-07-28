import React, { Component } from "react";
import AlbumTile from "./components/AlbumTile";
import Body from "./components/Body";
import Header from "./components/Header";
import albums from "./albums.json";

class App extends Component {
    state = {
        albums,
        score: 0,
        highscore: 0
    };

    //scoring
    clickCount = id => {
        this.state.albums.find((h, i) => {
            if (h.id === id) {
                if (albums[i].count === 0) {
                    albums[i].count = albums[i].count + 1;
                    this.setState({ score: this.state.score + 1 }, function () {
                        console.log(this.state.score);
                    });
                    this.state.albums.sort(() => Math.random() - 0.5)
                    return true;
                } else {
                    this.endGame();
                }
            }
        });
    }


    //endgame
    endGame = () => {
        if (this.state.score > this.state.highscore) {
            this.setState({ highscore: this.state.score }, function () {
                console.log(this.state.highscore);
            });
        }
        this.state.albums.forEach(albumArt => {
            albumArt.count = 0;
        });
        alert(`Album Click Game...OVER! The Final Score:\n ${this.state.score}`);
        this.setState({ score: 0 });
        return true;
    }

    //render albums
    render() {
        return (
            <Body>
                <Header score={this.state.score} highscore={this.state.highscore}>Metallica Album Click Game</Header>
                {this.state.albums.map(albumArt => (
                    <AlbumTile
                        clickCount={this.clickCount}
                        id={albumArt.id}
                        key={albumArt.id}
                        image={require(`${albumArt.image}`)}
                    />
                ))}
            </Body>
        );
    }
}

export default App;
