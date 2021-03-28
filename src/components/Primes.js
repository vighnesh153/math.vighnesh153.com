import React, {useState} from "react";

import {useTheme} from "@material-ui/core";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import {
  isPrime,
  primeFactors,
  findPreviousPrime,
  findNextPrimeNumber
} from "../utils/primes";

function Primes() {
  const theme = useTheme();

  const [isPrimeResult, setIsPrimeResult] = useState({
    string: '',
    primeFactors: '',
  });
  const [prevAndNextPrime, setPrevAndNextPrime] = useState('');

  const checkIsPrime = () => {
    const value = document.getElementById('is-prime').valueAsNumber;
    const isPrimeCheck = isPrime(value);
    setIsPrimeResult({
      string: `${value} is ${isPrimeCheck ? '' : 'not '} a prime number`,
      primeFactors: isPrimeCheck ? '' : primeFactors(value),
    });
  };

  const findPrevPrime = () => {
    const value = document.getElementById('prev-next-prime').valueAsNumber;
    const prevPrime = findPreviousPrime(value);
    setPrevAndNextPrime(`Previous prime number is ${prevPrime}`);
  };

  const findNextPrime = () => {
    const value = document.getElementById('prev-next-prime').valueAsNumber;
    const nextPrime = findNextPrimeNumber(value);
    setPrevAndNextPrime(`Next prime number is ${nextPrime}`);
  };

  return (
    <Box pb={2}>
      {/* Primality Check */}
      <Box m={2}>
        <Typography style={{marginBottom: theme.spacing(1)}}>
          Check if a number is a prime number (max 16 digit numbers)
        </Typography>
        <Box display={'flex'} alignItems={'center'}>
          <TextField
            id='is-prime'
            variant={"outlined"}
            type={'number'}
            style={{width: 300, marginRight: theme.spacing(1)}}
          />
          <Button
            variant={"contained"}
            color={"secondary"}
            onClick={checkIsPrime}
            style={{fontWeight: 'bold'}}
          >
            Check
          </Button>
        </Box>
        <Typography
          color={isPrimeResult.primeFactors ? "primary" : 'secondary'}
          style={{fontWeight: 'bold', marginTop: theme.spacing(1)}}
        >
          {isPrimeResult.string}
        </Typography>
        {isPrimeResult.primeFactors && (
          <Typography
            color={"primary"}
            style={{fontWeight: 'bold', marginTop: theme.spacing(1)}}
          >
            Prime Factorization:&nbsp;
            {Object.keys(isPrimeResult.primeFactors).map((prime, index) => (
              <span key={index}>
                {isPrimeResult.primeFactors[prime] === 1 ? (
                  prime
                ) : (
                  <span>
                    {prime} <sup>{isPrimeResult.primeFactors[prime]}</sup>
                  </span>
                )}
                {index === Object.keys(isPrimeResult.primeFactors).length - 1 ? '' : ' x '}
              </span>
            ))}
          </Typography>
        )}
      </Box>
      <Divider />
      {/* Previous and Next Prime */}
      <Box m={2}>
        <Typography style={{marginBottom: theme.spacing(1)}}>
          Find the Previous or Next Prime
        </Typography>
        <Box display={'flex'} alignItems={'center'}>
          <TextField
            id='prev-next-prime'
            variant={"outlined"}
            type={'number'}
            style={{width: 300, marginRight: theme.spacing(1)}}
          />
          <Button
            variant={"contained"}
            color={"secondary"}
            onClick={findPrevPrime}
            style={{fontWeight: 'bold', marginRight: theme.spacing(1)}}
          >
            Find Previous
          </Button>
          <Button
            variant={"contained"}
            color={"secondary"}
            onClick={findNextPrime}
            style={{fontWeight: 'bold'}}
          >
            Find Next
          </Button>
        </Box>
        <Typography
          color="primary"
          style={{fontWeight: 'bold', marginTop: theme.spacing(1)}}
        >
          {prevAndNextPrime}
        </Typography>
      </Box>
    </Box>
  );
}

export default Primes;
