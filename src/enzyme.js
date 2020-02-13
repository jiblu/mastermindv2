import Enzyme, { configure, shallow, mount, render } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
export { shallow, mount, render }
export default Enzyme

/*
https://blog.logrocket.com/getting-started-with-enzyme-for-react-a106b58fc53b/
*/