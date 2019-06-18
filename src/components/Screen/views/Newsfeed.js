import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native';

import NewsfeedList from '../../NewsfeedList/NewsfeedList';

const NewsfeedScreen = () => {
    state = {
        userName: 'Zeyad_Zaky',
        newsfeed: [
            {
                key: '1',
                title: 'Omar Elsayed',
                news: 'Omar reached 500 points'
            },
            {
                key: '2',
                title: 'Omar Elsayed',
                news: 'Omar reached 500 points'
            },
            {
                key: '3',
                title: 'Omar Elsayed',
                news: 'Omar reached 500 points'
            },
            {
                key: '4',
                title: 'Omar Elsayed',
                news: 'Omar reached 500 points'
            },
            {
                key: '5',
                title: 'Omar Elsayed',
                news: 'Omar reached 500 points'
            }
        ]
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/newsfeedPage/BG.png')} style={styles.background} imageStyle={styles.backgroundImage}>
                <View style={styles.topBar}>
                    <TouchableOpacity> 
                        <Image source={require('../../../assets/newsfeedPage/MENU.png')} style={styles.menu}></Image>
                    </TouchableOpacity>
                    <ImageBackground source={require('../../../assets/newsfeedPage/PlayerCard.png')} style={styles.playercard} imageStyle={styles.playercardImage}>
                        <Image source={require('../../../assets/newsfeedPage/PICFrame.png')} style={styles.profilepicture}></Image>
                        <Text style={styles.username}>{this.state.userName}</Text>
                    </ImageBackground>
                </View>
                <View style={styles.newsfeed}>
                    <NewsfeedList newsfeed={this.state.newsfeed}/>
                </View>
                <View style={styles.navbar}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/newsfeedPage/Rank_nav.png')} style={styles.navItem}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/newsfeedPage/Earth_nav.png')} style={styles.navItem}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/newsfeedPage/FootballCourt_nav.png')} style={styles.navItem}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    background: {
        width: '100%', 
        height: '100%'
    },
    backgroundImage: {
        resizeMode: 'stretch'
    },
    topBar: {
        maxHeight: '12%',
        marginBottom: '8%',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    menu: {
        marginLeft: '20%',
        width: '50%',
        height: '50%',
        resizeMode: 'stretch'
    },
    playercard: {
        width: '80%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    playercardImage: {
        resizeMode: 'stretch'
    },  
    profilepicture: {
        marginBottom: '35%',
        height: '65%',
        width: '20%',
        resizeMode: 'stretch'
    },
    username: {
        marginLeft: '5%',
        marginBottom: '70%',
        width: '75%',
        height: '30%',
        color: 'yellow'
    },
    newsfeed: {
        marginBottom: '10%',
        maxHeight: '70%',
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    navbar: {
        marginLeft: '15%',
        maxHeight: '10%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    navItem: {
        marginRight: '25%',
        resizeMode: 'stretch'
    }
});

export default NewsfeedScreen;