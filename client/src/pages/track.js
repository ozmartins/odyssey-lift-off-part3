import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

const TRACK = gql`
    query getTrack($trackId: ID!) {
            track(id: $trackId) {
            id
            title
            author {
                id
                name
                photo
            }
            thumbnail
            length
            modulesCount
            description
            numberOfViews
            modules {
                id
                title
                length
            }
        }
    }
`

const Track = ({ trackId }) => {
    const { loading, error, data } = useQuery(TRACK, {
        variables: { trackId }
    });

    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data}>
                <TrackDetail track={data?.track}></TrackDetail>
            </QueryResult>
        </Layout>
    )
}

export default Track;