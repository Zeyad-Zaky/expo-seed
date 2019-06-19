import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native';

import LeaderboardList from '../../LeaderboardList/Leaderboardlist';

class RankScreen extends Component {
    state = {
        userName: 'Zeyad_Zaky',
        leaderboard: [
            {
                key: '1',
                flag: require('../../../assets/rankPage/Nasrcityteam.png'),
                name: 'Nasrcity team',
                points: 5000
            },
            {
                key: '2',
                flag: require('../../../assets/rankPage/Maaditeam.png'),
                name: 'Maadi team',
                points: 4000
            },
            {
                key: '3',
                flag: require('../../../assets/rankPage/Newcairoteam.png'),
                name: 'Newcairo team',
                points: 3000
            },
            {   
                key: '4',
                flag: require('../../../assets/rankPage/Mohandseenteam.png'),
                name: 'Mohandseen team',
                points: 2000
            },
            {
                key: '5',
                flag: require('../../../assets/rankPage/Rehabteam.png'),
                name: 'Rehab team',
                points: 1000
            },
            {
                key: '6',
                flag: require('../../../assets/rankPage/Zamalekteam.png'),
                name: 'Zamalek team',
                points: 1000
            }
        ]
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/newsfeedPage/BG.png')} style={styles.background} >
                    <View style={styles.topBar}>
                        <TouchableOpacity> 
                            <Image source={require('../../../assets/newsfeedPage/MENU.png')} style={styles.menu}></Image>
                        </TouchableOpacity>
                        <ImageBackground source={require('../../../assets/newsfeedPage/PlayerCard.png')} style={styles.playercard} imageStyle={styles.playercardImage}>
                            <Image source={require('../../../assets/newsfeedPage/PICFrame.png')} style={styles.profilepicture}></Image>
                            <Text style={styles.username}>{this.state.userName}</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.optionsBar}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/rankPage/Button1.png')} style={styles.optionsItem}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/rankPage/Button2.png')} style={styles.optionsItem}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/rankPage/Button3.png')} style={styles.optionsItem}></Image>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../../../assets/rankPage/Map.png')} style={styles.map}></Image>
                    <View style={styles.leaderboard}>
                        <LeaderboardList leaderboard={this.state.leaderboard}></LeaderboardList>
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
    }
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
        maxHeight: '10%',
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
    optionsBar: {
        marginLeft: '20%',
        maxHeight: '10%',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    optionsItem: {
        maxWidth: '50%',
        maxHeight: '100%',
        marginRight: '5%',
        resizeMode: 'contain'
    },
    map: {
        marginLeft: '10%',
        maxWidth: '80%',
        maxHeight: '40%',
        resizeMode: 'stretch'
    },
    leaderboard: {
        maxHeight: '30%',
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

export default RankScreen;