<div className='container'>
      <button onClick={toggleShowChoco1} >
            {'chocolate1'}
      </button>
      <button onClick={toggleShowChoco2} disabled={!ShowBase2}>
            {'chocolate2'}
      </button>
      <button onClick={toggleShowChoco3} disabled={!ShowBase3}>
            {'chocolate3'}
      </button>
      <button onClick={toggleShowBase2} >
            {'Base2'}
      </button>
      <button onClick={toggleShowBase3} disabled={!ShowBase2}>
            {'Base3'}
      </button>
    </div>
    