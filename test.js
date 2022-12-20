const supertest = require('supertest')
const server = require('./server.js')

describe('validate-pref-object-shape', () => {
  test('GET with-shape-too-small-returns-http-406', async () => {
    const prefObj = {
        country: 'us',
        service: ['netflix'],
        genre: ['28'],
        page: '1'
    }

    await supertest(server)
        .get('/v1/movie/')
        .send(prefObj)
        .expect(406)
        .then(response => {
            expect(response.text).toEqual('Preferences properties are incorrect');
        })
  })

  test('GET with-shape-too-large-returns-http-406', async () => {
    const prefObj = {
        country: 'us',
        service: ['netflix'],
        genre: ['28'],
        page: '1',
        orderBy: 'original_title',
        randomProp: 'random entry'
    }

    await supertest(server)
        .get('/v1/movie/')
        .send(prefObj)
        .expect(406)
        .then(response => {
            expect(response.text).toEqual('Preferences properties are incorrect')
        })
  })

  test('GET with-wrong-property-identifier-returns-http-406', async () => {
    const prefObj = {
        country: 'us',
        service: ['netflix'],
        genre: ['28'],
        page: '1',
        order: 'original_title'
    }

    await supertest(server)
        .get('/v1/movie/')
        .send(prefObj)
        .expect(406)
        .then(response => {
            expect(response.text).toEqual('Preferences properties are incorrect')
        })
  })
/*
  test('GET with-valid-size-properties', async () => {
    const prefObj = {
        country: 'us',
        service: ['netflix'],
        genre: ['28'],
        page: '1',
        orderBy: 'original_title'
    }

    await supertest(server)
        .get(`/v1/movie/`)
        .send(prefObj)
        .expect(201)
        //validate the object response based on parameters of front end application 
        .then(response = {
            expect(response.body).toEqual();
        })
        
  }) */
})

describe('validate-pref-object-data-type', () => {
    test('GET with-genre-not-an-array-returns-http-406', async () => {
        const prefObj = {
            country: 'us',
            service: ['netflix'],
            genre: '28',
            page: '1',
            orderBy: 'original_title'
        }
    
        await supertest(server)
            .get('/v1/movie/')
            .send(prefObj)
            .expect(406)
            .then(response => {
                expect(response.text).toEqual('Preferences properties are incorrect')
        })
    })
    
    test('GET service-property-not-array-returns-http-406', async () => {
    const prefObj = {
        country: 'us',
        service: 'netflix',
        genre: ['28'],
        page: '1',
        orderBy: 'original_title'
    }

    await supertest(server)
        .get('/v1/movie/')
        .send(prefObj)
        .expect(406)
        .then(response => {
            expect(response.text).toEqual('Preferences properties are incorrect')
        })
    })

    test('GET page-property-isNaN-returns-http-400', async () => {
        const prefObj = {
            country: 'us',
            service: ['netflix'],
            genre: ['28'],
            page: 'cows',
            orderBy: 'original_title'
        }
    
        await supertest(server)
            .get('/v1/movie/')
            .send(prefObj)
            .expect(406)
            .then(response => {
                expect(response.text).toEqual('Preferences properties are incorrect')
            })
    })

    test('GET country-property-is-not-type-string-returns-http-400', async () => {
        const prefObj = {
            country: false,
            service: ['netflix'],
            genre: ['28'],
            page: '1',
            orderBy: 'original_title'
        }
    
        await supertest(server)
            .get('/v1/movie/')
            .send(prefObj)
            .expect(406)
            .then(response => {
                expect(response.text).toEqual('Preferences properties are incorrect')
            })
    })

    test('GET orderBy-property-is-not-type-string-returns-http-400', async () => {
        const prefObj = {
            country: 'us',
            service: ['netflix'],
            genre: ['28'],
            page: '1',
            orderBy: 3
        }
    
        await supertest(server)
            .get('/v1/movie/')
            .send(prefObj)
            .expect(406)
            .then(response => {
                expect(response.text).toEqual('Preferences properties are incorrect')
            })
    })
})