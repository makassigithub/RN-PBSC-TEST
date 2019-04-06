import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import { capitalize } from '../constants';

const propTypes = {
    name: PropTypes.object.isRequired,
    dob: PropTypes.object.isRequired,
    picture: PropTypes.object.isRequired,
};

const Content = ({name, dob, picture }) => (
    <View style={styles.container}>
        <View style={styles.imageWrapper}>
            <Image
                style={styles.image}
                source={{uri: picture.medium}}
            />
            <Text style={styles.name}>
                {`${capitalize(name.first)} ${capitalize(name.last)}`}
            </Text>
            <Text style={styles.age}> ({dob.age})</Text>
        </View>
    </View>
);

Content.propTypes = propTypes;
export default Content;

const styles = {
    container: {
        flex: 1,
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 128,
        height: 128,
        borderRadius: 64,
    },
    name:{
        fontSize: 32,
        textAlign: 'center',
    },
    age: {
        fontSize: 14,
        textAlign: 'center',
    }
};
