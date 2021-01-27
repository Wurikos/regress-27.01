import React from "react";
import theme from "theme";
import { Theme, Link, Box, Button, Hr, Image, Icon, Input, Text, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { GoogleMap, Menu, StackItem, Stack, SocialMedia, Section } from "@quarkly/components";
import * as Components from "components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box />
		<Button>
			Button
		</Button>
		<Hr />
		<Image width="64px" height="64px" />
		<Icon category="md" icon={MdFace} />
		<Input />
		<Link href="#">
			Some text
		</Link>
		<List>
			<Text>
				First item
			</Text>
		</List>
		<Text>
			Some text
		</Text>
		<List>
			<Text>
				First item
			</Text>
		</List>
		<Link href="#">
			Some text
		</Link>
		<Link href="#">
			Some text
		</Link>
		<Input />
		<Image width="64px" height="64px" />
		<GoogleMap />
		<Menu />
		<Stack>
			{"    "}
			<StackItem width="50%" display="flex">
				{"        "}
				<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
					{"            "}First Item{"\n        "}
				</Text>
				{"    "}
			</StackItem>
			{"    "}
			<StackItem width="50%" display="flex">
				{"        "}
				<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
					{"            "}Second Item{"\n        "}
				</Text>
				{"    "}
			</StackItem>
		</Stack>
		<SocialMedia
			facebook="https://www.facebook.com/quarklyapp/"
			twitter="https://twitter.com/quarklyapp"
			youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
			vkontakte="https://vk.com/quarklyapp"
			telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
		/>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80) 50% 15%/cover"
			color="--light"
			font="--base"
		>
			<Box>
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					Mary
					<br />
					Cornell
				</Text>
			</Box>
			<Stack>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					font="--lead"
					text-transform="uppercase"
					letter-spacing="1px"
				>
					<Text margin="0px">
						About me
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						My name is Mary Cornell, born and raised in France.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						I've been working as a professional photographer and videographer for more than 12 years.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						CDS Documentary Essay Prize and Best Photographer of The Year 2019 by Sony World Photography Awards.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Hey I’m David
				</Text>
				<Text font="--base">
					My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
				</Text>
			</Box>
		</Section>
		<StackItem>
			<Text font="--lead">
				Stack item
			</Text>
		</StackItem>
		<Components.Red />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});