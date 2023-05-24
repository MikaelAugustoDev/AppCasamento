import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countDownDate = new Date('2023-07-01T16:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000)

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (

    <View style={styles.container}>

      <Text style={styles.title}>Casamento</Text>
      <Text style={styles.title}>Mikael & Karini</Text>

      <View style={styles.contador}>

        <View style={styles.card}>

          <View style={styles.containerNumber}>

            <View style={styles.number}>

              <Text style={styles.numberCounter}>{countdown.days}</Text>

            </View>

          </View>

          <Text style={styles.infos}>Dias</Text>

        </View>
        <View style={styles.card}>

          <View style={styles.containerNumber}>

            <View style={styles.number}>

              <Text style={styles.numberCounter}>{countdown.hours}</Text>

            </View>

          </View>

          <Text style={styles.infos}>Horas</Text>

        </View>
        <View style={styles.card}>

          <View style={styles.containerNumber}>

            <View style={styles.number}>

              <Text style={styles.numberCounter}>{countdown.minutes}</Text>

            </View>

          </View>

          <Text style={styles.infos}>Minutos</Text>

        </View>
        <View style={styles.card}>

          <View style={styles.containerNumber}>

            <View style={styles.number}>

              <Text style={styles.numberCounter}>{countdown.seconds}</Text>

            </View>

          </View>

          <Text style={styles.infos}>Segundos</Text>

        </View>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(236, 21%, 26%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff'
  },
  contador: {
    width: 400,
    height: 170,
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    width: 100,
    height: 170,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerNumber: {
    width: 90,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    width: 80,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infos: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'hsl(237, 18%, 59%)',

  },
  numberCounter: {
    fontSize: 60,
    color: 'hsl(345, 95%, 68%)'
  }

});
