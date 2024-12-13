'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import {AwsRum, AwsRumConfig} from "aws-rum-web";

let rumClient: AwsRum|undefined = undefined;

const initRUMClient = async () => {
	if (!rumClient) {
		const config: AwsRumConfig = {
			sessionSampleRate: 1.0,
			identityPoolId: "us-east-1:f8b6c5a4-8c4c-4409-9911-a2ea6c8bbb48",
			endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
			telemetries: ["performance","errors","http"],
			allowCookies: true,
			enableXRay: false
		};

		const APPLICATION_ID: string = '786fa0f7-b626-44df-a3bb-07a3b024be92';
		const APPLICATION_VERSION: string = '1.0.0';
		const APPLICATION_REGION: string = 'us-east-1';

		rumClient = new AwsRum(
			APPLICATION_ID,
			APPLICATION_VERSION,
			APPLICATION_REGION,
			config
		);
	}
};

export default function PageViewTracker() {
	const pathname = usePathname();

	useEffect(() => {
		const trackPageView = async () => {
			await initRUMClient();
			if (rumClient) {
				rumClient.recordPageView(pathname);
				console.log(`Page view recorded for ${pathname}`);
			}
		};

		trackPageView();
	}, [pathname]);

	return <></>; // No visible UI
}