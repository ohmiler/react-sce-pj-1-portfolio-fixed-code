# Fixed & Updated Code

Installing Packages
```
npm i react-router-dom

npm i styled-components

npm i -S carbon-components

npm i -S carbon-components-react --force

npm i -S @carbon/icons-react --force

npm i -S @carbon/themes

npm i node-sass --force
```

1. [fixed] switch from old router to new router in index.js (pages directory)

FROM THIS
```
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education'

const Pages = ({ user }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Me user={user} />
                </Route>
                <Route path="/projects">
                    <Projects user={user} />
                </Route>
                    <Route path="/work">
                <Work user={user} />
                </Route>
                <Route path="/education">
                    <Education user={user} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Pages
```
TO THIS
```
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education'

const Pages = ({ user }) => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Me user={user} />} />
            <Route path="/projects" element={<Projects user={user} />} />
            <Route path="/work" element={<Work user={user} />} />
            <Route path="/education" element={<Education user={user} />} />
          </Routes>
        </Router>
    )
}
export default Pages

```

2. [fixed] change icons name in MobileNav.js (remove 32) & UserHeader.js (remove 16)

FROM THIS
```
// MobileNav.js

import { User32, Code32, Portfolio32, Education32 } from '@carbon/icons-react'
```
TO THIS
```
// MobileNav.js

import { User, Code, Portfolio, Education } from '@carbon/icons-react'
```
FROM THIS
```
// UserHeader.js

import { ArrowRight16 } from '@carbon/icons-react'

```
TO THIS
```
// UserHeader.js

import { ArrowRight } from '@carbon/icons-react'

```