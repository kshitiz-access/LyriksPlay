import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const shazamCoreApi= createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl :'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders : (headers)=>{
                headers.set('X-RapidAPI-Key','b838c6c392msh2b11f1893f15ce6p1d6003jsne8d99e5882d0');

                return headers;
                
            },
        }),
        endpoints:(builder)=>({
            getTopCharts: builder.query({
                query: ()=> '/charts/world'
            }),

        })

    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;