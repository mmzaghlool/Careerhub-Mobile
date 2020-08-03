import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Dimensions,
    FlatList
} from 'react-native';
import firebase from 'react-native-firebase';
import Spinner from '../common/Loading';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Rating } from 'react-native-elements';
import Header from '../common/Header';
import Style from '../common/Style'

const { height, width } = Dimensions.get('window')

export default class Tracks extends Component {
    constructor() {
        super()
        this.state = {
            spinner: true,
        }
    }

    async componentDidMount() {
        let coursesArray = [];
        // sorted by vote
        await firebase.database().ref('courses').orderByChild('vote_average').once('value', function (snapshot) {
            snapshot.forEach(function (child) {
                coursesArray.push(child.val())
            });
        });

        let courses = []
        let categoriesArr = []
        let CoursesOfcategories = []
        // get all courses
        await firebase.database().ref('courses').once('value', snap => {
            const val = snap.val()
            const courses = Object.values(val)
            // array of categories only
            courses.forEach(category => {
                if (category.genres !== undefined && !categoriesArr.includes(category.genres)) {
                    categoriesArr.push(category.genres)
                }
            });
            // array of object (category and array of courses of that category)
            for (const category in categoriesArr) {
                const element = categoriesArr[category];
                const result = courses.filter(x => x !== false && x.genres === element);
                CoursesOfcategories.push({ element, result })
            }
        });

        this.setState({ spinner: false, courses, categoriesArr, CoursesOfcategories })
    }

    renderCategory(item) {
        const { spinner, CoursesOfcategories } = this.state;
        let course = item.result.slice(0, 3);
        return (
            <ScrollView horizontal={true}>
                <View
                    style={{
                        marginBottom: 25,
                        backgroundColor: '#ffffff',
                    }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#37324D' }}>{item.element}</Text>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <FlatList
                            data={course}
                            extraData={this.state}
                            keyExtractor={this._keyExtractor}
                            horizontal={true}
                            renderItem={({ item }) =>
                                this.renderCourses(item)
                            }
                        />
                        <TouchableOpacity
                            style={{
                                padding: 20,
                                backgroundColor: '#ffffff',
                                elevation: 5,
                                width: 200,
                                borderRadius: 20,
                                marginHorizontal: 10,
                                marginVertical: 10,
                                flex: 1,
                                justifyContent: 'center'
                            }}
                            onPress={() => this.props.navigation.navigate('Courses', { item, category:item.element })}
                        >
                            <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', lineHeight: 50 }}>Show more..</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }

    renderCourses(item) {
        return (
            <View>
                <View
                    style={{
                        padding: 20,
                        backgroundColor: '#ffffff',
                        elevation: 5,
                        width: 200,
                        borderRadius: 20,
                        marginHorizontal: 10,
                        marginVertical: 10,
                        flex: 1
                    }}
                >
                    <Text style={{ color: '#000000', fontSize: 16 }}>{item.title}</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Rating
                            imageSize={15}
                            readonly
                            style={{ marginTop: 3, marginHorizontal: 5 }}
                            startingValue={item.vote_average}
                        />
                        <Text style={{ color: 'gray' }}>{item.vote_average}</Text>
                    </View>
                    <Text style={{ color: 'gray', marginTop: 5 }}>{item.instructor}</Text>
                </View>
            </View>
        );
    }

    render() {
        const { spinner, CoursesOfcategories } = this.state;
        if (spinner) {
            return <Spinner />
        } else {
            return (
                <View style={[{ marginBottom: 80 },Style.container]}>
                    <Header backButton title="Tracks" />
                    <StatusBar backgroundColor='#2c233d' barStyle="light-content" />
                    <View style={{ padding: 20 }}>

                        <FlatList
                            data={CoursesOfcategories}
                            extraData={this.state}
                            keyExtractor={this._keyExtractor}
                            renderItem={({ item }) => this.renderCategory(item)}
                        />
                    </View>
                </View>
            );
        }
    };
}

const styles = StyleSheet.create({
    basicBackground: {
        backgroundColor: '#ffffff',
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    background: {
        backgroundColor: '#ffffff',
        height: '75%',
        width: '100%',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        alignItems: 'center',
        marginTop: height * 0.08,
        paddingTop: height * 0.1,
    },
    header1: {
        color: '#ffffff',
        fontSize: 90,
        fontWeight: 'bold',
        marginTop: height * 0.09,
    },
    header2: {
        color: '#ffffff',
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: height * 0.125,
    },
    text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: height * 0.04,
        width: width * 0.75,
        height: height * 0.055,
    },
    bottonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtittle: {
        color: 'gray',
        fontSize: 15,
        marginTop: height * 0.15,
    }
});