import React, { useState } from 'react';
import GlobalStyles  from './styles/globalStyles'
import { ThemeProvider } from 'styled-components';

import Add from './components/add'
import Header from './components/header'
import List from './components/list'
import Footer from './components/footer'

import { lightTheme, darkTheme } from './styles/theme';



function App() {
    // State hook for setting theme
    const [theme, setTheme] = useState('light');

    console.log('This is ' + theme + 'mode')

    // function to toggle theme
    const toggleTheme = () => {
        if (theme === 'light') // theme not light, set dark
            setTheme('dark');  
        else // else, set light 
            setTheme('light'); 
    }

    return ( 
        <ThemeProvider theme = { theme === 'light' ? lightTheme : darkTheme }>
            <GlobalStyles />
            <Header theme = { theme } toggleTheme = { toggleTheme}/>
            <Add />
            <List/>
            <Footer/>
        </ThemeProvider>
     );
}

export default App;