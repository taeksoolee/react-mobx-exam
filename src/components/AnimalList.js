import { Observer } from 'mobx-react-lite';
import React from 'react';
import { animal } from '../store';

@Observer
class AnimalList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      animal.fetchList();
    }, 3000);
  }
  
  render() {
    return (      
      <div>
        {animal.pending === -1 && <div>error</div>}
        {animal.pending === 0 && <div>loading...</div>}
        {animal.pending === 1 && (
          <div>
            {animal.list.map((a, i) => (
              <div key={i}>{a.name}</div>
            ))}
          </div>
        )}
        <hr />
        <div>{animal.firstAnimal?.name}</div>
      </div>
    )
  }
}

export default AnimalList;