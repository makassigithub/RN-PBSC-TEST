import React from 'react';
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from 'react-native';
import {COLORS} from '../constants';

const propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
}

const Button = ({
    color,
    title,
    onClick,
    disabled,
}) =>
    (<TouchableOpacity 
        onPress={onClick}
        style={[
            styles.container,
            { backgroundColor: disabled ? COLORS.LIGHT_GREY : color }
        ]}
        disabled={disabled}
     >
            <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>);

Button.propTypes = propTypes;
export default Button;

const styles = {
    container: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    titleText: {
        fontWeight: 'bold',
        color: 'white',
    }
};