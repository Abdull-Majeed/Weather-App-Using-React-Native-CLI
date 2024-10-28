import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

const HomePage = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false)

    const apiData = data ? [
        { key: 'City : ', value: data.location.name },
        { key: 'Country :', value: data.location.country },
        { key: 'Region : ', value: data.location.region },
        { key: 'Local time : ', value: data.location.localtime },
        { key: 'Temperature in Celsius : ', value: `${data.current.temp_c} °C` },
        { key: 'Temperature in Fahrenheit : ', value: `${data.current.temp_f} °F` },
        { key: 'Last updated : ', value: data.current.last_updated },
        { key: 'Wind in kph : ', value: `${data.current.wind_kph} kph` },
        { key: 'Wind degree : ', value: `${data.current.wind_degree} °` },
        { key: 'Wind direction : ', value: data.current.wind_dir },
        { key: 'Humidity : ', value: `${data.current.humidity}%` },
        { key: 'Cloud cover : ', value: `${data.current.cloud}%` },
        { key: 'Condition : ', value: data.current.condition.text },
    ] : [];
    const FetchWeatherData = async () => {
        setLoading(true)
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '',
                'x-rapidapi-host': '
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result)
        } catch (error) {
            <Text style={{ fontSize: 20 }}>{error}</Text>
        }

        setLoading(false);
        setSearch('');
    };

    return (
        <View style={styles.mainContainer}>
            <TextInput
                style={styles.inputField}
                placeholder="Search city"
                value={search}
                onChangeText={setSearch}
            />

            <TouchableOpacity style={styles.searchBtn} onPress={FetchWeatherData}>
                <Text style={styles.btnTxt}>Search</Text>
            </TouchableOpacity>

            {loading ?
                <ActivityIndicator size="large" color="red" />
                : <FlatList
                    data={apiData}
                    renderItem={({ item }) => <View style={styles.showData}>

                        <Text style={styles.dataTxt}>{item.key} {item.value}</Text>

                    </View>}
                />}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        margin: 15,
    },
    inputField: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        marginBottom: 20,
        paddingLeft: 10
    },
    searchBtn: {
        height: 50,
        borderWidth: 1,
        backgroundColor: 'teal',
        borderColor: 'black',
        borderRadius: 30
    },
    btnTxt: {
        flex: 1,
        fontSize: 20,
        fontWeight: '500',
        color: '#ffff',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    showData: {
        paddingTop: 10
    },
    dataTxt: {
        fontSize: 17,
        fontWeight: '500'
    }
});

export default HomePage;
