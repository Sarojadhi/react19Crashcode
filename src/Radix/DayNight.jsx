import React, { useState } from 'react';
import { Flex, Button } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const DayNight = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="40vh"
      width="10%"
      gap ="4"
        margin="4"
    padding="4"
    
      style={{
        backgroundColor: darkMode ? "#1a202c" : "#f7fafc", 
        color: darkMode ? "#f7fafc" : "#1a202c",
      }}
    >
      <Button
        variant="primary"
        size="medium"
        style={{ fontSize: "2rem" }} 
        onClick={toggleTheme}
      >
        {darkMode ? "🌙" : "🌞"}
      </Button>
    </Flex>
  );
}

export default DayNight;
