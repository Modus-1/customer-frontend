import { getSession, MODUS_SESSION_TYPE } from "../Components/services/GatewayServices";
import axios from "axios";
jest.mock("axios");

// thanks to https://eloquentcode.com/expect-a-function-to-throw-an-exception-in-jest 
// for info about async exception throwing testing


describe('getSession', () => {

    const data = {};    

    describe('on failure', () => {

        it('should throw an error when the tableNumber is not of type Number', async () => {

            // Arrange
            const tableNumber = "ABCD";
        
            // Act
        
            // Assert
            await expect(() => getSession(tableNumber)).rejects.toThrow();
        
        });

        it('should throw an error when the tableNumber less than one', async () => {

            // Arrange
            const tableNumber = "0";
        
            // Act
        
            // Assert
            await expect(() => getSession(tableNumber)).rejects.toThrow();
        
        });

        it('should throw an error when the session type is not a Modus Session Type', async () => {

            // Arrange
            const type1 = "ABC";
            const type2 = 999;

            // Act

            // Assert
            await expect(() => getSession(1, type1)).rejects.toThrow();
            await expect(() => getSession(1, type2)).rejects.toThrow();

        });

        it('should throw an error when the gateway does not respond with OK', async () => {

            // Arrange
            axios.post.mockImplementation(() => Promise.resolve({data: data, status: 400}))

            // Act

            // Assert
            await expect(() => getSession(1)).rejects.toThrow();

        });

    });

    describe('on success', () => {

        const expectedResponse = {
            'successful': true,
            'message': '',
            'data': {
                'id': 'ac87070644adf70a0803c409066b593566449f9796b482268a6b175128e2d13431f87393f68cbd9e3bef913b6a43e354836bff02960d210d921bc8c28178e33a',
                'tableNumber': 69
            }
        }

        it('should return the inner data object when axios returns a 200 OK', async () => {

            // Arrange
            axios.post.mockImplementation(() => Promise.resolve({data: expectedResponse, status: 200}));

            // Act
            const response = await getSession(1);

            // Assert       
            expect(response).toEqual(expectedResponse);

        });

    });

});

