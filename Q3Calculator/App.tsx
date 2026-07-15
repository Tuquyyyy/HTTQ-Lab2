import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (op) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>

      {/* Row 1: 7 8 9 ÷ */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(7)}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(8)}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(9)}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorInput('/')}>
          <Text style={styles.operatorText}>÷</Text>
        </TouchableOpacity>
      </View>

      {/* Row 2: 4 5 6 × */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(4)}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(5)}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(6)}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorInput('*')}>
          <Text style={styles.operatorText}>×</Text>
        </TouchableOpacity>
      </View>

      {/* Row 3: 1 2 3 - */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(1)}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(2)}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(3)}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorInput('-')}>
          <Text style={styles.operatorText}>−</Text>
        </TouchableOpacity>
      </View>

      {/* Row 4: 0 (pill) + = */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.zeroButton} onPress={() => handleNumberInput(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.plusButton} onPress={() => handleOperatorInput('+')}>
          <Text style={styles.operatorText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.equalButton} onPress={handleEqual}>
          <Text style={styles.equalText}>=</Text>
        </TouchableOpacity>
      </View>

      {/* Clear button - full width */}
      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearText}>C</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;