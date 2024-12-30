export default function css() {
  return `
    .loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: normal;
  background-color: #00000070;
}
.loader-1-01 {
	border: .2em dotted currentcolor;
	border-radius: 50%;
	animation: 1s loader-01 linear infinite;
}

@keyframes loader-01 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}


.loader-1-02 {
	border: .2em solid transparent;
	border-left-color: currentcolor;
	border-right-color: currentcolor;
	border-radius: 50%;
	animation: 1s loader-02 linear infinite;
}

@keyframes loader-02 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}


.loader-1-03 {
	border: .2em solid currentcolor;
	border-bottom-color: transparent;
	border-radius: 50%;
	animation: 1s loader-03 linear infinite;
	position: relative;
}

@keyframes loader-03 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}


.loader-1-04 {
	border: 1px solid currentcolor;
	border-radius: 50%;
	animation: 1s loader-04 linear infinite;
	position: relative;
	&:before {
		content: '';
		display: block;
		width: 0;
		height: 0;
		position: absolute;
		top: -.2em;
		left: 50%;
		border: .2em solid currentcolor;
		border-radius: 50%;
	}
}

@keyframes loader-04 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}


.loader-1-05 {
	border: .2em solid transparent;
	border-top-color: currentcolor;
	border-radius: 50%;
	animation: 1s loader-05 linear infinite;
	position: relative;
	&:before {
		content: '';
		display: block;
		width: inherit;
		height: inherit;
		position: absolute;
		top: -.2em;
		;
		left: -.2em;
		;
		border: .2em solid currentcolor;
		border-radius: 50%;
		opacity: .5;
	}
}

@keyframes loader-05 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}


.loader-1-06 {
	border: .2em solid currentcolor;
	border-radius: 50%;
	animation: loader-06 1s ease-out infinite;
}

@keyframes loader-06 {
	0% {
		transform: scale(0);
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		transform: scale(1);
		opacity: 0;
	}
}


.loader-1-07 {
	border: 0 solid transparent;
	border-radius: 50%;
	position: relative;
	&:before,
	&:after {
		content: '';
		border: .2em solid currentcolor;
		border-radius: 50%;
		width: inherit;
		height: inherit;
		position: absolute;
		top: 0;
		left: 0;
		animation: loader-07 1s linear infinite;
		opacity: 0;
	}
	&:before {
		animation-delay: 1s;
	}
	&:after {
		animation-delay: .5s;
	}
}

@keyframes loader-07 {
	0% {
		transform: scale(0);
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		transform: scale(1);
		opacity: 0;
	}
}


.loader-1-08 {
	position: relative;
	&:before,
	&:after {
		content: '';
		width: inherit;
		height: inherit;
		border-radius: 50%;
		background-color: currentcolor;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		animation: loader-08 2.0s infinite ease-in-out;
	}
	&:after {
		animation-delay: -1.0s;
	}
}

@keyframes loader-08 {
	0%,
	100% {
		transform: scale(0.0);
	}
	50% {
		transform: scale(1.0);
	}
}


.loader-1-09 {
	background-color: currentcolor;
	border-radius: 50%;
	animation: loader-09 1.0s infinite ease-in-out;
}

@keyframes loader-09 {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1.0);
		opacity: 0;
	}
}


.loader-1-10 {
	position: relative;
	animation: loader-10-1 2.0s infinite linear;
	&:before,
	&:after {
		content: '';
		width: 0;
		height: 0;
		border: .5em solid currentcolor;
		display: block;
		position: absolute;
		border-radius: 100%;
		animation: loader-10-2 2s infinite ease-in-out;
	}
	&:before {
		top: 0;
		left: 50%;
	}
	&:after {
		bottom: 0;
		right: 50%;
		animation-delay: -1s;
	}
}

@keyframes loader-10-1 {
	100% {
		transform: rotate(360deg);
	}
}

@keyframes loader-10-2 {
	0%,
	100% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
}


.loader-1-11 {
	background-color: currentcolor;
	animation: loader-11 1.2s infinite ease-in-out;
}

@keyframes loader-11 {
	0% {
		transform: perspective(120px) rotateX(0deg) rotateY(0deg);
	}
	50% {
		transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
	}
	100% {
		transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	}
}


.loader-1-12 {
	position: relative;
	&:before,
	&:after {
		content: '';
		display: block;
		position: absolute;
		background-color: currentcolor;
		left: 50%;
		right: 0;
		top: 0;
		bottom: 50%;
		box-shadow: -.5em 0 0 currentcolor;
		animation: loader-12 1s linear infinite;
	}
	&:after {
		top: 50%;
		bottom: 0;
		animation-delay: .25s;
	}
}

@keyframes loader-12 {
	0%,
	100% {
		box-shadow: -.5em 0 0 transparent;
		background-color: currentcolor;
	}
	50% {
		box-shadow: -.5em 0 0 currentcolor;
		background-color: transparent;
	}
}


.loader-1-13:before,
.loader-1-13:after,
.loader-1-13 {
	border-radius: 50%;
	animation-fill-mode: both;
	animation: loader-13 1.8s infinite ease-in-out;
}

.loader-1-13 {
	color: currentcolor;
	position: relative;
	transform: translateZ(0);
	animation-delay: -0.16s;
	top: -1em;
	&:before {
		right: 100%;
		animation-delay: -0.32s;
	}
	&:after {
		left: 100%;
	}
	&:before,
	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		width: inherit;
		height: inherit;
	}
}

@keyframes loader-13 {
	0%,
	80%,
	100% {
		box-shadow: 0 1em 0 -1em;
	}
	40% {
		box-shadow: 0 1em 0 -.2em;
	}
}


.loader-1-14 {
	border-radius: 50%;
	box-shadow: 0 1em 0 -.2em currentcolor;
	position: relative;
	animation: loader-14 0.8s ease-in-out alternate infinite;
	animation-delay: 0.32s;
	top: -1em;
	&:after,
	&:before {
		content: '';
		position: absolute;
		width: inherit;
		height: inherit;
		border-radius: inherit;
		box-shadow: inherit;
		animation: inherit;
	}
	&:before {
		left: -1em;
		animation-delay: 0.48s;
	}
	&:after {
		right: -1em;
		animation-delay: 0.16s;
	}
}

@keyframes loader-14 {
	0% {
		box-shadow: 0 2em 0 -.2em currentcolor;
	}
	100% {
		box-shadow: 0 1em 0 -.2em currentcolor;
	}
}


.loader-1-15 {
	background: currentcolor;
	position: relative;
	animation: loader-15 1s ease-in-out infinite;
	animation-delay: 0.4s;
	width: .25em;
	height: .5em;
	margin: 0 .5em;
	&:after,
	&:before {
		content: '';
		position: absolute;
		width: inherit;
		height: inherit;
		background: inherit;
		animation: inherit;
	}
	&:before {
		right: .5em;
		animation-delay: 0.2s;
	}
	&:after {
		left: .5em;
		animation-delay: 0.6s;
	}
}

@keyframes loader-15 {
	0%,
	100% {
		box-shadow: 0 0 0 currentcolor, 0 0 0 currentcolor;
	}
	50% {
		box-shadow: 0 -.25em 0 currentcolor, 0 .25em 0 currentcolor;
	}
}


.loader-1-16 {
	transform: rotateZ(45deg);
	perspective: 1000px;
	border-radius: 50%;
	&:before,
	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: inherit;
		height: inherit;
		border-radius: 50%;
		animation: 1s spin linear infinite;
	}
	&:before {
		transform: rotateX(70deg);
	}
	&:after {
		transform: rotateY(70deg);
		animation-delay: .4s;
	}
}

@keyframes rotate {
	0% {
		transform: translate(-50%, -50%) rotateZ(0deg);
	}
	100% {
		transform: translate(-50%, -50%) rotateZ(360deg);
	}
}

@keyframes rotateccw {
	0% {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	100% {
		transform: translate(-50%, -50%) rotate(-360deg);
	}
}

@keyframes spin {
	0%,
	100% {
		box-shadow: .2em 0px 0 0px currentcolor;
	}
	12% {
		box-shadow: .2em .2em 0 0 currentcolor;
	}
	25% {
		box-shadow: 0 .2em 0 0px currentcolor;
	}
	37% {
		box-shadow: -.2em .2em 0 0 currentcolor;
	}
	50% {
		box-shadow: -.2em 0 0 0 currentcolor;
	}
	62% {
		box-shadow: -.2em -.2em 0 0 currentcolor;
	}
	75% {
		box-shadow: 0px -.2em 0 0 currentcolor;
	}
	87% {
		box-shadow: .2em -.2em 0 0 currentcolor;
	}
}


.loader-1-17 {
	position: relative;
	background-color: currentcolor;
	border-radius: 50%;
	&:after,
	&:before {
		content: "";
		position: absolute;
		width: .25em;
		height: .25em;
		border-radius: 50%;
		opacity: .8;
	}
	&:after {
		left: -.5em;
		top: -.25em;
		background-color: currentcolor;
		transform-origin: .75em 1em;
		animation: loader-17 1s linear infinite;
		opacity: .6;
	}
	&:before {
		left: -1.25em;
		top: -.75em;
		background-color: currentcolor;
		transform-origin: 1.5em 1em;
		animation: loader-17 2s linear infinite;
	}
}

@keyframes loader-17 {
	0% {
		transform: rotateZ(0deg) translate3d(0, 0, 0);
	}
	100% {
		transform: rotateZ(360deg) translate3d(0, 0, 0);
	}
}


.loader-1-18 {
	position: relative;
	&:before,
	&:after {
		content: '';
		display: block;
		position: absolute;
		border-radius: 50%;
		border: .1em solid transparent;
		border-bottom-color: currentcolor;
		top: 0;
		left: 0;
		animation: 1s loader-18 linear infinite;
	}
	&:before {
		width: 1em;
		height: 1em;
	}
	&:after {
		width: .8em;
		height: .8em;
		top: .1em;
		left: .1em;
		animation-direction: reverse;
	}
}

@keyframes loader-18 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}


.loader-1-19 {
	border-top: .2em solid currentcolor;
	border-right: .2em solid transparent;
	animation: loader-19 1s linear infinite;
	border-radius: 100%;
	position: relative;
}

@keyframes loader-19 {
	to {
		transform: rotate(360deg);
	}
}


.loader-1-20 {
	background-color: transparent;
	box-shadow: inset 0px 0px 0px .1em currentcolor;
	border-radius: 50%;
	position: relative;
	&:after,
	&:before {
		position: absolute;
		content: "";
		background-color: currentcolor;
		top: .5em;
		left: .5em;
		height: .1em;
		transform-origin: left center;
	}
	&:after {
		width: .4em;
		animation: loader-20 2s linear infinite;
	}
	&:before {
		width: .3em;
		animation: loader-20 8s linear infinite;
	}
}

@keyframes loader-20 {
	0% {
		transform: rotate(0deg)
	}
	100% {
		transform: rotate(360deg)
	}
}


.loader-1-21 {
	position: relative;
	&:before,
	&:after {
		position: absolute;
		content: "";
	}
	&:before {
		width: 80%;
		height: 80%;
		left: 10%;
		bottom: 10%;
		border-radius: 100% 100% 100% 0;
		box-shadow: 0px 0px 0px .1em currentcolor;
		animation: loader-21 1s linear infinite;
		transform: rotate(-46deg);
	}
	&:after {
		width: 1em;
		height: .3em;
		border-radius: 100%;
		left: 0;
		background-color: rgba(255, 255, 255, 0.2);
		bottom: -.2em;
		z-index: -1;
	}
}

@keyframes loader-21 {
	0% {
		top: 0;
	}
	50% {
		top: -5px;
	}
	100% {
		top: 0;
	}
}


.loader-1-22 {
	border: .1em currentcolor solid;
	border-radius: 100%;
	position: relative;
	overflow: hidden;
	z-index: 1;
	&:after,
	&:before {
		position: absolute;
		content: "";
		background-color: currentcolor;
	}
	&:after {
		width: 50%;
		height: .1em;
		left: 50%;
		top: 50%;
		transform-origin: left center;
		animation: loader-22 2s linear infinite alternate;
	}
	&:before {
		width: 100%;
		height: 40%;
		left: 0;
		bottom: 0;
	}
}

@keyframes loader-22 {
	0% {
		transform: rotate(-160deg);
	}
	100% {
		transform: rotate(-20deg);
	}
}


.loader-1-23 {
	height: .5em;
	border: .1em currentcolor solid;
	border-radius: .1em;
	position: relative;
	animation: loader-23 5s linear infinite;
	&:after {
		width: .07em;
		height: 100%;
		background-color: currentcolor;
		border-radius: 0px .5em .5em 0px;
		position: absolute;
		content: "";
		top: 0;
		left: calc(100% + .1em);
	}
}

@keyframes loader-23 {
	0% {
		box-shadow: inset 0px 0px 0px currentcolor;
	}
	100% {
		box-shadow: inset 1em 0px 0px currentcolor;
	}
}


.loader-1-24 {
	width: .8em;
	height: 1em;
	border: .1em currentcolor solid;
	border-radius: 0px 0px .2em .2em;
	position: relative;
	&:after,
	&:before {
		position: absolute;
		content: "";
	}
	&:after {
		width: .2em;
		height: 50%;
		border: .1em currentcolor solid;
		border-left: none;
		border-radius: 0px .5em .5em 0px;
		left: calc(100% + .1em);
		top: .1em;
	}
	&:before {
		width: .1em;
		height: .3em;
		background-color: currentcolor;
		top: -.3em;
		left: .05em;
		box-shadow: .2em 0px 0px 0px currentcolor, .2em -.2em 0px 0px currentcolor, .4em 0px 0px 0px currentcolor;
		animation: loader-24 1s linear infinite alternate;
	}
}

@keyframes loader-24 {
	0% {
		height: 0px
	}
	100% {
		height: 6px;
	}
}


.loader-1-25 {
	border: .1em currentcolor solid;
	position: relative;
	animation: loader-25-1 5s linear infinite;
	&:after {
		width: .2em;
		height: .2em;
		position: absolute;
		content: "";
		background-color: currentcolor;
		bottom: calc(100% + .2em);
		left: -.4em;
		animation: loader-25-2 1s ease-in-out infinite;
	}
}

@keyframes loader-25-1 {
	0% {
		box-shadow: inset 0 0 0 0 currentcolor;
	}
	100% {
		box-shadow: inset 0 -1em 0 0 currentcolor;
	}
}

@keyframes loader-25-2 {
	25% {
		left: calc(100% + .2em);
		bottom: calc(100% + .2em);
	}
	50% {
		left: calc(100% + .2em);
		bottom: -.4em;
	}
	75% {
		left: -.4em;
		bottom: -.4em;
	}
	100% {
		left: -.4em;
		bottom: calc(100% + .2em);
	}
}


.loader-1-26 {
	width: .5em;
	height: .5em;
	background-color: currentcolor;
	box-shadow: 1em 0px 0px currentcolor;
	border-radius: 50%;
	animation: loader-26 1s ease-in-out infinite alternate;
}

@keyframes loader-26 {
	0% {
		opacity: 0.1;
		transform: rotate(0deg) scale(0.5);
	}
	100% {
		opacity: 1;
		transform: rotate(360deg) scale(1.2);
	}
}


.loader-1-27 {
	box-shadow: inset 0 0 0 .1em currentcolor;
	border-radius: 50%;
	position: relative;
	margin-left: 1.2em;
	&:before {
		content: '';
		display: block;
		width: inherit;
		height: inherit;
		border-radius: 50%;
		position: absolute;
		right: 1.2em;
		top: 0;
		box-shadow: inset 0 0 0 .1em currentcolor;
	}
	&:after {
		border: .2em solid currentcolor;
		box-shadow: -1.2em 0 0 0 currentcolor;
		width: 0;
		height: 0;
		border-radius: 50%;
		left: 50%;
		top: 25%;
		position: absolute;
		content: "";
		animation: loader-27 2s linear infinite alternate;
	}
}

@keyframes loader-27 {
	0% {
		left: 0;
	}
	100% {
		left: .5em;
	}
}


.loader-1-28 {
	position: relative;
	animation: 2s loader-28-1 infinite;
	&:before {
		content: '';
		display: block;
		width: inherit;
		height: inherit;
		border-radius: 80% 20%;
		border: .1em solid currentcolor;
		transform: rotate(45deg);
		border-width: .1em .05em .05em .1em;
	}
	&:after {
		content: '';
		display: block;
		width: .2em;
		height: .2em;
		position: absolute;
		top: .4em;
		left: 50%;
		border-radius: 50%;
		box-shadow: -.07em .07em 0 .1em currentcolor;
		animation: 2s loader-28-2 linear infinite;
	}
}

@keyframes loader-28-1 {
	0%,
	100% {
		transform: scaleY(1);
	}
	10% {
		transform: scaleY(0);
	}
	20% {
		transform: scaleY(1);
	}
}

@keyframes loader-28-2 {
	0%,
	100% {
		transform: translateX(0);
	}
	30% {
		transform: translateX(-100%);
	}
	50% {
		transform: transalteX(200%);
	}
}


.loader-1-29 {
	border-radius: 50%;
	box-shadow: inset 0 0 0 .1em currentcolor, -.5em -.5em 0 -.4em currentcolor, 0 -.7em 0 -.4em currentcolor, .5em -.5em 0 -.4em currentcolor, -.5em .5em 0 -.4em currentcolor, 0 .7em 0 -.4em currentcolor, .5em .5em 0 -.4em currentcolor, -.7em 0 0 -.4em currentcolor, .7em 0 0 -.4em currentcolor;
	animation: 5s loader-29 linear infinite;
}

@keyframes loader-29 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}


.loader-1-30 {
	border: .2em solid transparent;
	border-top-color: currentcolor;
	border-bottom-color: currentcolor;
	border-radius: 50%;
	position: relative;
	animation: 1s loader-30 linear infinite;
	&:before,
	&:after {
		content: '';
		display: block;
		width: 0;
		height: 0;
		position: absolute;
		border: .2em solid transparent;
		border-bottom-color: currentcolor;
	}
	&:before {
		transform: rotate(135deg);
		right: -.3em;
		top: -.05em;
	}
	&:after {
		transform: rotate(-45deg);
		left: -.3em;
		bottom: -.05em;
	}
}

@keyframes loader-30 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}


.loader-1-31 {
	box-shadow: 0 0 2em currentcolor;
	background-color: currentcolor;
	position: relative;
	border-radius: 50%;
	transform: rotateX(-60deg) perspective(1000px);
	&:before,
	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: inherit;
		height: inherit;
		border-radius: inherit;
		animation: 1s loader-31 ease-out infinite;
	}
	&:after {
		animation-delay: .4s;
	}
}

@keyframes loader-31 {
	0% {
		opacity: 1;
		transform: rotate(0deg);
		box-shadow: 0 0 0 -.5em currentcolor, 0 0 0 -.5em currentcolor, 0 0 0 -.5em currentcolor, 0 0 0 -.5em currentcolor, 0 0 0 -.5em currentcolor, 0 0 0 -.5em currentcolor, 0 0 0 -.5em currentcolor, 0 0 0 -.5em currentcolor;
	}
	100% {
		opacity: 0;
		transform: rotate(180deg);
		box-shadow: -1em -1em 0 -.35em currentcolor, 0 -1.5em 0 -.35em currentcolor, 1em -1em 0 -.35em currentcolor, -1.5em 0 0 -.35em currentcolor, 1.5em -0 0 -.35em currentcolor, -1em 1em 0 -.35em currentcolor, 0 1.5em 0 -.35em currentcolor, 1em 1em 0 -.35em currentcolor;
	}
}


.loader-1-32 {
	position: relative;
	border-radius: 50%;
	box-shadow: 0 0 1em 0 currentcolor, inset 0 0 1em 0 currentcolor;
	animation: 1s loader-32 linear infinite;
	&:before,
	&:after {
		content: '';
		display: block;
		width: inherit;
		height: inherit;
		position: absolute;
		border-radius: 50%;
	}
	&:before {
		border-top: .2em solid currentcolor;
		border-right: .2em solid transparent;
		top: .28em;
		right: calc(50% - .22em);
	}
	&:after {
		border-bottom: .2em solid currentcolor;
		border-left: .2em solid transparent;
		bottom: .28em;
		left: calc(50% - .22em);
	}
}

@keyframes loader-32 {
	0% {
		transform: rotateX(-60deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(-60deg) rotateZ(360deg);
	}
}


.loader-1-33 {
	border-radius: 50%;
	position: relative;
	width: 180px;
	height: 180px;
	&:after,
	&:before {
		position: absolute;
		content: "";
	}
	&:after {
		height: 0.1em;
		width: 1em;
		background-color: currentcolor;
		border-radius: 0.1em;
		bottom: 0;
		left: 0;
		transform-origin: bottom center;
		animation: loader-33-1 0.8s ease-in-out infinite alternate;
	}
	&:before {
		height: .2em;
		width: .2em;
		background-color: currentcolor;
		border-radius: 50%;
		top: 0;
		left: calc(50% - .1em);
		animation: loader-33-2 0.4s ease-in-out infinite alternate;
	}
}

@keyframes loader-33-2 {
	0% {
		height: .24em;
		transform: translateY(0px);
	}
	75% {
		height: .2em;
		width: .2em;
	}
	100% {
		height: .1em;
		width: .24em;
		transform: translateY(.8em);
	}
}

@keyframes loader-33-1 {
	0% {
		transform: rotate(-45deg);
	}
	100% {
		transform: rotate(45deg);
	}
}


.loader-1-34 {
	position: relative;
	width: 1em;
	height: .5em;
	&:after,
	&:before {
		position: absolute;
		content: "";
		height: .4em;
		width: .4em;
		top: 0;
		background-color: currentcolor;
		border-radius: 50%;
	}
	&:after {
		right: 0;
		animation: loader-34-2 0.5s ease-in-out infinite;
		animation-direction: alternate;
	}
	&:before {
		left: 0;
		animation: loader-34-1 0.5s ease-in-out infinite;
		animation-direction: alternate;
	}
}

@keyframes loader-34-1 {
	0% {
		transform: translatex(0px);
	}
	65% {
		height: .4em;
		width: .4em;
	}
	100% {
		height: .5em;
		width: .3em;
		transform: translatex(.2em);
	}
}

@keyframes loader-34-2 {
	0% {
		transform: translatex(0px);
	}
	65% {
		height: .4em;
		width: .4em;
	}
	100% {
		height: .5em;
		width: .3em;
		transform: translatex(-.2em);
	}
}


.loader-1-35 {
	margin: 0 .5em;
	position: relative;
	&:before {
		border-radius: 50%;
		background-color: currentcolor;
		animation: loader-35 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
		content: '';
		width: inherit;
		height: inherit;
		top: 0;
		left: 0;
		position: absolute;
	}
}

@keyframes loader-35 {
	0% {
		transform: translateX(0) scale(1)
	}
	25% {
		transform: translateX(-100%) scale(0.3)
	}
	50% {
		transform: translateX(0) scale(1)
	}
	75% {
		transform: translateX(100%) scale(0.3)
	}
	100% {
		transform: translateX(0) scale(1)
	}
}


.loader-1-36 {
	position: relative;
	&:before,
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
	}
	&:before {
		width: 1em;
		height: 1em;
		border: .1em solid currentcolor;
		border-radius: 50%;
		animation: loader-36-1 1.15s infinite -0.3s;
	}
	&:after {
		right: 0;
		bottom: 0;
		margin: auto;
		width: 0;
		height: 0;
		border: .1em solid currentcolor;
		border-radius: 50%;
		transform: translate(-.2em);
		animation: loader-36-2 4.6s infinite steps(1);
	}
}

@keyframes loader-36-1 {
	to {
		transform: rotateX(180deg);
	}
}

@keyframes loader-36-2 {
	0% {
		opacity: 0;
	}
	25% {
		opacity: 1;
	}
	50% {
		box-shadow: .2em 0 0 currentcolor;
	}
	75% {
		box-shadow: .2em 0 0 currentcolor, .4em 0 0 currentcolor;
	}
}


.loader-1-37 {
	border-right: .1em solid currentcolor;
	border-radius: 100%;
	animation: loader-37 800ms linear infinite;
	&:before,
	&:after {
		content: '';
		width: .8em;
		height: .8em;
		display: block;
		position: absolute;
		top: calc(50% - .4em);
		left: calc(50% - .4em);
		border-left: .08em solid currentcolor;
		border-radius: 100%;
		animation: loader-37 400ms linear infinite reverse;
	}
	&:after {
		width: .6em;
		height: .6em;
		top: calc(50% - .3em);
		left: calc(50% - .3em);
		border: 0;
		border-right: .05em solid currentcolor;
		animation: none;
	}
}

@keyframes loader-37 {
	from {
		transform: rotate(360deg);
	}
	to {
		transform: rotate(0deg);
	}
}


.loader-1-38 {
	height: 0.1em;
	width: 0.1em;
	box-shadow: -0.2em -0.2em 0 0.1em currentcolor, -0.2em -0.2em 0 0.1em currentcolor, -0.2em -0.2em 0 0.1em currentcolor, -0.2em -0.2em 0 0.1em currentcolor;
	animation: loader-38 6s infinite;
}

@keyframes loader-38 {
	0% {
		box-shadow: -0.2em -0.2em 0 0.1em currentcolor, -0.2em -0.2em 0 0.1em currentcolor, -0.2em -0.2em 0 0.1em currentcolor, -0.2em -0.2em 0 0.1em currentcolor;
	}
	8.33% {
		box-shadow: -0.2em -0.2em 0 0.1em currentcolor, 0.2em -0.2em 0 0.1em currentcolor, 0.2em -0.2em 0 0.1em currentcolor, 0.2em -0.2em 0 0.1em currentcolor;
	}
	16.66% {
		box-shadow: -0.2em -0.2em 0 0.1em currentcolor, 0.2em -0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor;
	}
	24.99% {
		box-shadow: -0.2em -0.2em 0 0.1em currentcolor, 0.2em -0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor, -0.2em 0.2em 0 0.1em currentcolor;
	}
	33.32% {
		box-shadow: -0.2em -0.2em 0 0.1em currentcolor, 0.2em -0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor, -0.2em -0.2em 0 0.1em currentcolor;
	}
	41.65% {
		box-shadow: 0.2em -0.2em 0 0.1em currentcolor, 0.2em -0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor, 0.2em -0.2em 0 0.1em currentcolor;
	}
	49.98% {
		box-shadow: 0.2em 0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor;
	}
	58.31% {
		box-shadow: -0.2em 0.2em 0 0.1em currentcolor, -0.2em 0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor, -0.2em 0.2em 0 0.1em currentcolor;
	}
	66.64% {
		box-shadow: -0.2em -0.2em 0 0.1em currentcolor, -0.2em -0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor, -0.2em 0.2em 0 0.1em currentcolor;
	}
	74.97% {
		box-shadow: -0.2em -0.2em 0 0.1em currentcolor, 0.2em -0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor, -0.2em 0.2em 0 0.1em currentcolor;
	}
	83.3% {
		box-shadow: -0.2em -0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor, 0.2em 0.2em 0 0.1em currentcolor, -0.2em 0.2em 0 0.1em currentcolor;
	}
	91.63% {
		box-shadow: -0.2em -0.2em 0 0.1em currentcolor, -0.2em 0.2em 0 0.1em currentcolor, -0.2em 0.2em 0 0.1em currentcolor, -0.2em 0.2em 0 0.1em currentcolor;
	}
	100% {
		box-shadow: -0.2em -0.2em 0 0.1em currentcolor, -0.2em -0.2em 0 0.1em currentcolor, -0.2em -0.2em 0 0.1em currentcolor, -0.2em -0.2em 0 0.1em currentcolor;
	}
}

.loader-1-39 {
  position: relative;
  width: .15em;
  height: .15em;
  background-color: currentcolor;
  border-radius: 100%;
  animation: loader-39-1 30s infinite linear;
	&:before, &:after {
		content: '';
		border-radius: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	&:before {
		width: .3em;
		height: 1em;
		animation: loader-39-2 .8s linear infinite;
	}
	&:after {
		width: 1em;
		height: .3em;
		animation: loader-39-2 1.2s linear infinite;
	}
}
@keyframes loader-39-1 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes loader-39-2 {
  0% {
    box-shadow: 0.04em -0.04em 0 0.02em currentcolor;
  }
  25% {
    box-shadow: 0.04em 0.04em 0 0.02em currentcolor;
  }
  50% {
    box-shadow: -0.04em 0.04em 0 0.02em currentcolor;
  }
  75% {
    box-shadow: -0.04em -0.04em 0 0.02em currentcolor;
  }
  100% {
    box-shadow: 0.04em -0.04em 0 0.02em currentcolor;
  }
}

.loader-1-40 {
	border: .05em currentcolor solid;
	border-radius: .2em;
	overflow: hidden;
	position: relative;
	&:after, &:before {
		content: '';
		border-radius: 50%;
		position: absolute;
		width: inherit;
		height: inherit;
		animation: loader-40 2s infinite linear;
	}
	&:before {
		border-top: .2em currentcolor solid;
		top: -.15em;
		left: calc( -50% - .15em );
		transform-origin: right center;
	}
	&:after {
		border-bottom: .2em currentcolor solid;
		top: .15em;
		right: calc( -50% - .15em );
		transform-origin: left center;
	}
}
@keyframes loader-40 {
	from { transform: rotate(0deg); }
	to { transform: rotate(359deg); }
}

.loader-1-41 {
	border: .05em currentcolor solid;
	border-radius: .2em;
	position: relative;
	background: linear-gradient(45deg, transparent 48%, currentcolor 50%, currentcolor 50%, transparent 52%, transparent),
				linear-gradient(-45deg, transparent 48%, currentcolor 50%, currentcolor 50%, transparent 52%, transparent);
	background-size: .5em .5em;
	background-position: 0% 0%;
	animation: loader-41 1s infinite linear;
}
@keyframes loader-41 {
	from { background-position: 0 0; }
	to { background-position: -1em 0; }
}


.loader-1-42 {
	width: 2em;
	height: .66em;
	border: .05em currentcolor solid;
	border-radius: .1em;
	background: linear-gradient(-60deg, transparent 0%, transparent 50%, currentcolor 50%, currentcolor 75%, transparent 75%, transparent);
	background-size: 1em 2em;
	background-position: 0 0;
	animation: loader-42 0.8s infinite linear;
}
@keyframes loader-42 {
	from { background-position: 0 0; }
	to { background-position: -2em 0; }
}
        
.loader-2-1 {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  
  .loader-2-2 {
    width: 48px;
    height: 48px;
    border: 3px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-2:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-bottom-color: #FF3D00;
  }
  
  .loader-2-3 {
    width: 48px;
    height: 48px;
    border: 3px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-3:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-bottom-color: #FF3D00;
  }
  
  .loader-2-4 {
    width: 48px;
    height: 48px;
    border: 3px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-4:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #FF3D00 transparent;
  }
  
  .loader-2-5 {
    width: 48px;
    height: 48px;
    border: 3px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-5:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #FF3D00 transparent;
  }
  
  .loader-2-6 {
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-6:after, .loader-2-6:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #FF3D00;
    width: 6px;
    height: 6px;
    transform: translate(150%, 150%);
    border-radius: 50%;
  }
  .loader-2-6:before {
    left: auto;
    top: auto;
    right: 0;
    bottom: 0;
    transform: translate(-150%, -150%);
  }
  
  .loader-2-7 {
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-7:after, .loader-2-7:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #FF3D00;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  .loader-2-7:before {
    left: auto;
    top: auto;
    right: 0;
    bottom: 0;
  }
  
  .loader-2-8 {
    width: 48px;
    height: 48px;
    border: 3px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-8:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #FF3D00;
    width: 16px;
    height: 16px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }
  
  .loader-2-9 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 2px solid #FF3D00;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-9:after {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    border: 2px solid #FFF;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  
  .loader-2-10 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color: #FFF #FFF transparent;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-10:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent #FF3D00 #FF3D00;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    -webkit-animation: rotationBack 0.5s linear infinite;
            animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }
  
  .loader-2-11 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color: #FFF #FFF transparent transparent;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-11:after, .loader-2-11:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent transparent #FF3D00 #FF3D00;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    -webkit-animation: rotationBack 0.5s linear infinite;
            animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }
  .loader-2-11:before {
    width: 32px;
    height: 32px;
    border-color: #FFF #FFF transparent transparent;
    -webkit-animation: rotation 1.5s linear infinite;
            animation: rotation 1.5s linear infinite;
  }
  
  .loader-2-12 {
    width: 48px;
    height: 48px;
    border: 3px dotted #FFF;
    border-style: solid solid dotted dotted;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 2s linear infinite;
            animation: rotation 2s linear infinite;
  }
  .loader-2-12:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px dotted #FF3D00;
    border-style: solid solid dotted;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    -webkit-animation: rotationBack 1s linear infinite;
            animation: rotationBack 1s linear infinite;
    transform-origin: center center;
  }
  
  .loader-2-13 {
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-13:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    background: #FF3D00;
    width: 3px;
    height: 24px;
    transform: translateX(-50%);
  }
  
  .loader-2-14 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader-2-14::after, .loader-2-14::before {
    content: "";
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid #FFF;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: animloader14 2s linear infinite;
            animation: animloader14 2s linear infinite;
  }
  .loader-2-14::after {
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }
  
  .loader-2-15 {
    width: 48px;
    height: 48px;
    border: 5px dotted #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 2s linear infinite;
            animation: rotation 2s linear infinite;
  }
  
  .loader-2-16 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background: linear-gradient(0deg, rgba(255, 61, 0, 0.2) 33%, #ff3d00 100%);
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-16:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #263238;
  }
  
  .loader-2-17 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #FFF;
    border-right: 3px solid transparent;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  
  .loader-2-18 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #FFF;
    border-right: 4px solid transparent;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-18:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-bottom: 4px solid #FF3D00;
    border-left: 4px solid transparent;
  }
  
  .loader-2-19 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #FFF;
    border-right: 4px solid transparent;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-19:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid #FF3D00;
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;
  }
  
  .loader-2-20 {
    width: 48px;
    height: 48px;
    border: 5px solid;
    border-color: #FF3D00 transparent;
    border-radius: 50%;
    display: inline-block;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  
  .loader-2-21 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 10px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  
  .loader-2-22 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 10px solid;
    -webkit-animation: animloader51 1s linear infinite alternate;
            animation: animloader51 1s linear infinite alternate;
  }
  
  .loader-2-23 {
    width: 48px;
    height: 48px;
    border: 3px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-23:after {
    content: "";
    position: absolute;
    left: 20px;
    top: 31px;
    border: 10px solid transparent;
    border-right-color: #FFF;
    transform: rotate(-40deg);
  }
  
  .loader-2-24 {
    width: 48px;
    height: 48px;
    border-width: 3px;
    border-style: dashed solid solid dotted;
    border-color: #FF3D00 #FF3D00 transparent #FF3D00;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-24:after {
    content: "";
    position: absolute;
    left: 20px;
    top: 31px;
    border: 10px solid transparent;
    border-right-color: #FF3D00;
    transform: rotate(-40deg);
  }
  
  .loader-2-25 {
    width: 48px;
    height: 48px;
    background: #FFF;
    display: inline-block;
    border-radius: 50%;
    -webkit-animation: animloader14 1s ease-in infinite;
            animation: animloader14 1s ease-in infinite;
  }
  
  .loader-2-26 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader-2-26::after, .loader-2-26::before {
    content: "";
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #FFF;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: animloader14 2s linear infinite;
            animation: animloader14 2s linear infinite;
  }
  .loader-2-26::after {
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }
  
  .loader-2-27 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader-2-27::after, .loader-2-27::before {
    content: "";
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #FFF;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: animloader27 2s ease-in-out infinite;
            animation: animloader27 2s ease-in-out infinite;
  }
  .loader-2-27::after {
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }
  
  .loader-2-28 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    -webkit-animation: animloader28 1s linear infinite;
            animation: animloader28 1s linear infinite;
  }
  
  .loader-2-29 {
    border: 24px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  
  .loader-2-30 {
    border: 2px solid #FFF;
    width: 48px;
    height: 48px;
    background: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 2s linear infinite;
            animation: rotation 2s linear infinite;
  }
  .loader-2-30:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border: 24px solid;
    border-color: transparent #FFF;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  
  .loader-2-31 {
    width: 48px;
    height: 48px;
    background: #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-31:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 10px;
    width: 12px;
    height: 12px;
    color: #FF3D00;
    background: currentColor;
    border-radius: 50%;
    box-shadow: 25px 2px, 10px 22px;
  }
  
  .loader-2-32 {
    width: 48px;
    height: 48px;
    border: 4px solid;
    background: rgba(255, 255, 255, 0.2);
    border-color: transparent #FFF #FFF transparent;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s ease-in-out infinite;
            animation: rotation 1s ease-in-out infinite;
  }
  .loader-2-32:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border: 12px solid;
    border-color: transparent #FF3D00 #FF3D00 transparent;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  
  .loader-2-33 {
    border: 2px solid;
    border-color: transparent #FFF;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 2s linear infinite;
            animation: rotation 2s linear infinite;
  }
  .loader-2-33:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border: 24px solid;
    border-color: transparent rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  
  .loader-2-34 {
    border: 24px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: inline-block;
    -webkit-animation: animloader34 1s linear infinite;
            animation: animloader34 1s linear infinite;
  }
  
  .loader-2-35 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-35:after, .loader-2-35:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #FF3D00;
    width: 16px;
    height: 16px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }
  .loader-2-35:before {
    left: auto;
    right: 0;
    background: #FFF;
    transform: translate(50%, 100%);
  }
  
  .loader-2-36 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: zeroRotation 1s linear infinite alternate;
            animation: zeroRotation 1s linear infinite alternate;
  }
  .loader-2-36:after, .loader-2-36:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #FF3D00;
    width: 16px;
    height: 16px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }
  .loader-2-36:before {
    left: auto;
    right: 0;
    transform: translate(50%, 100%);
  }
  
  .loader-2-37 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    color: #FFF;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-37:after, .loader-2-37:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    background-color: #FFF;
    border-radius: 50%;
    -webkit-animation: scale50 1s infinite ease-in-out;
            animation: scale50 1s infinite ease-in-out;
  }
  .loader-2-37:before {
    top: auto;
    bottom: 0;
    background-color: #FF3D00;
    -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
  }
  
  .loader-2-38 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    color: #FFF;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  .loader-2-38:after, .loader-2-38:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 50%;
    transform: scale(0.5) translate(0, 0);
    background-color: #FFF;
    border-radius: 50%;
    -webkit-animation: animloader38 1s infinite ease-in-out;
            animation: animloader38 1s infinite ease-in-out;
  }
  .loader-2-38:before {
    background-color: #FF3D00;
    transform: scale(0.5) translate(-48px, -48px);
  }
  
  .loader-2-39 {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background: #FFF;
    -webkit-animation: shadowExpandX 2s linear infinite alternate;
            animation: shadowExpandX 2s linear infinite alternate;
  }
  
  .loader-2-40 {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background: #FFF;
    box-shadow: -24px 0 #FFF, 24px 0 #FFF;
    -webkit-animation: shadowPulse 2s linear infinite;
            animation: shadowPulse 2s linear infinite;
  }
  
  .loader-2-41 {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background: #FF3D00;
    color: #FFF;
    box-shadow: -24px 0, 24px 0;
    -webkit-animation: rotation 2s ease-in-out infinite;
            animation: rotation 2s ease-in-out infinite;
  }
  
  .loader-2-42 {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    color: #FFF;
    -webkit-animation: animloader42 1s linear infinite alternate;
            animation: animloader42 1s linear infinite alternate;
  }
  
  .loader-2-43 {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    color: #FFF;
    left: -100px;
    -webkit-animation: shadowRolling 2s linear infinite;
            animation: shadowRolling 2s linear infinite;
  }
  
  .loader-2-44 {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    color: #FFF;
    -webkit-animation: animloader44 2s linear infinite;
            animation: animloader44 2s linear infinite;
  }
  
  .loader-2-45 {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    color: #FFF;
    -webkit-animation: animloader45 1s linear infinite alternate;
            animation: animloader45 1s linear infinite alternate;
  }
  
  .loader-2-46 {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
  }
  .loader-2-46::after {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    transform: translate(-50%, 100%);
    -webkit-animation: animloader46 1s linear infinite;
            animation: animloader46 1s linear infinite;
    top: 0;
  }
  
  .loader-2-47 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader-2-47::after, .loader-2-47::before {
    content: "";
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: rotation 2s ease-in-out infinite;
            animation: rotation 2s ease-in-out infinite;
  }
  .loader-2-47::after {
    border-color: #FF3D00;
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }
  
  .loader-2-48 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader-2-48::after, .loader-2-48::before {
    content: "";
    width: 48px;
    height: 48px;
    border: 4px solid #FFF;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: animloader14 2s ease-in-out infinite;
            animation: animloader14 2s ease-in-out infinite;
  }
  .loader-2-48::after {
    border-color: #FF3D00;
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }
  
  .loader-2-49 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader-2-49::after, .loader-2-49::before {
    content: "";
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: rotation 2s ease-in-out infinite alternate;
            animation: rotation 2s ease-in-out infinite alternate;
  }
  .loader-2-49::after {
    border-color: #FF3D00;
    animation-direction: alternate-reverse;
  }
  
  .loader-2-50 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader-2-50::after, .loader-2-50::before {
    content: "";
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: scaleOut 2s ease-in-out infinite;
            animation: scaleOut 2s ease-in-out infinite;
  }
  .loader-2-50::after {
    border-color: #FF3D00;
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }
  
  .loader-2-51 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader-2-51::after, .loader-2-51::before {
    content: "";
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: rotationBreak 3s ease-in-out infinite alternate;
            animation: rotationBreak 3s ease-in-out infinite alternate;
  }
  .loader-2-51::after {
    border-color: #FF3D00;
    animation-direction: alternate-reverse;
  }
  
  .loader-2-52 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    border: 2px solid #FFF;
    -webkit-animation: rotation 2s linear infinite;
            animation: rotation 2s linear infinite;
  }
  .loader-2-52:after, .loader-2-52:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 2px solid #FF3D00;
    width: 38px;
    height: 38px;
    -webkit-animation: rotationBack 1.5s linear infinite;
            animation: rotationBack 1.5s linear infinite;
    transform-origin: center center;
  }
  .loader-2-52:before {
    width: 28px;
    height: 28px;
    border-color: #FFF;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  
  .loader-2-53 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    background: #FFF;
    -webkit-animation: flipX 1s linear infinite;
            animation: flipX 1s linear infinite;
  }
  
  .loader-2-54 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    color: #FFF;
    border: 1px solid;
    -webkit-animation: fill 2s linear infinite alternate;
            animation: fill 2s linear infinite alternate;
  }
  
  .loader-2-55 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    background: #FFF;
    animation: zeroRotation 1s ease infinite alternate-reverse;
  }
  
  .loader-2-56 {
    width: 24px;
    height: 24px;
    display: inline-block;
    position: relative;
    background: #FFF;
    -webkit-animation: animloader56 2s linear infinite;
            animation: animloader56 2s linear infinite;
  }
  
  .loader-2-57 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader-2-57::after {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    left: 0;
    top: 0;
    background: #FFF;
    color: #FFF;
    -webkit-animation: animloader57 2s linear infinite alternate;
            animation: animloader57 2s linear infinite alternate;
  }
  
  .loader-2-58 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader-2-58::before {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    left: 0;
    top: -24px;
    -webkit-animation: animloader58 2s linear infinite alternate;
            animation: animloader58 2s linear infinite alternate;
  }
  .loader-2-58::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    -webkit-animation: animloader58m 2s linear infinite alternate;
            animation: animloader58m 2s linear infinite alternate;
  }
  
  .loader-2-59 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    transform: rotate(45deg);
  }
  .loader-2-59::before {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    left: 0;
    top: -24px;
    -webkit-animation: animloader59 4s ease infinite;
            animation: animloader59 4s ease infinite;
  }
  .loader-2-59::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    -webkit-animation: animloader56 2s ease infinite;
            animation: animloader56 2s ease infinite;
  }
  
  .loader-2-60 {
    width: 16px;
    height: 16px;
    box-shadow: 0 30px, 0 -30px;
    border-radius: 4px;
    background: currentColor;
    display: inline-block;
    position: relative;
    color: #FFF;
    left: -30px;
    -webkit-animation: animloader60 2s ease infinite;
            animation: animloader60 2s ease infinite;
  }
  .loader-2-60::after, .loader-2-60::before {
    content: "";
    width: 16px;
    height: 16px;
    box-shadow: 0 30px, 0 -30px;
    border-radius: 4px;
    background: currentColor;
    color: #FFF;
    position: absolute;
    left: 30px;
    top: 0;
    -webkit-animation: animloader60 2s 0.2s ease infinite;
            animation: animloader60 2s 0.2s ease infinite;
  }
  .loader-2-60::before {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
    left: 60px;
  }
  
  [data-index="61"] {
    align-items: normal;
    padding-top: 75px;
  }
  
  .loader-2-61 {
    width: 8px;
    height: 40px;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    background: currentColor;
    color: #FFF;
    -webkit-animation: animloader61m 0.3s 0.3s linear infinite alternate;
            animation: animloader61m 0.3s 0.3s linear infinite alternate;
  }
  .loader-2-61::after, .loader-2-61::before {
    content: "";
    width: 8px;
    height: 40px;
    border-radius: 4px;
    background: currentColor;
    position: absolute;
    bottom: 0;
    left: 20px;
    -webkit-animation: animloader61 0.3s 0.45s linear infinite alternate;
            animation: animloader61 0.3s 0.45s linear infinite alternate;
  }
  .loader-2-61::before {
    left: -20px;
    -webkit-animation-delay: 0s;
            animation-delay: 0s;
  }
  
  .loader-2-62 {
    width: 8px;
    height: 40px;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    background: currentColor;
    color: #FFF;
    -webkit-animation: animloader61 0.3s 0.3s linear infinite alternate;
            animation: animloader61 0.3s 0.3s linear infinite alternate;
  }
  .loader-2-62::after, .loader-2-62::before {
    content: "";
    width: 8px;
    height: 40px;
    border-radius: 4px;
    background: currentColor;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    -webkit-animation: animloader61 0.3s 0.45s linear infinite alternate;
            animation: animloader61 0.3s 0.45s linear infinite alternate;
  }
  .loader-2-62::before {
    left: -20px;
    -webkit-animation-delay: 0s;
            animation-delay: 0s;
  }
  
  .loader-2-63 {
    width: 8px;
    height: 48px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    left: -40px;
    -webkit-animation: animloader63 1s linear infinite alternate;
            animation: animloader63 1s linear infinite alternate;
  }
  
  .loader-2-64 {
    width: 8px;
    height: 48px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    left: -60px;
    color: #FFF;
    -webkit-animation: animloader64 0.6s linear infinite;
            animation: animloader64 0.6s linear infinite;
  }
  
  .loader-2-65 {
    width: 48px;
    height: 6px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    top: -50px;
    color: #FFF;
    -webkit-animation: animloader65 0.6s linear infinite;
            animation: animloader65 0.6s linear infinite;
  }
  
  [data-index="66"] {
    justify-content: normal;
    padding-left: 15%;
  }
  
  .loader-2-66 {
    width: 4.8px;
    height: 4.8px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    color: #FFF;
    background: currentColor;
    -webkit-animation: animloader66 0.3s 0.3s linear infinite alternate;
            animation: animloader66 0.3s 0.3s linear infinite alternate;
  }
  .loader-2-66::after, .loader-2-66::before {
    content: "";
    width: 4.8px;
    height: 4.8px;
    border-radius: 4px;
    background: currentColor;
    position: absolute;
    left: 0;
    top: 15px;
    -webkit-animation: animloader66 0.3s 0.45s linear infinite alternate;
            animation: animloader66 0.3s 0.45s linear infinite alternate;
  }
  .loader-2-66::after {
    top: -15px;
    -webkit-animation-delay: 0s;
            animation-delay: 0s;
  }
  
  .loader-2-67 {
    width: 4.8px;
    height: 4.8px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    color: #FFF;
    background: currentColor;
    -webkit-animation: animloader66 0.3s 0.3s linear infinite alternate;
            animation: animloader66 0.3s 0.3s linear infinite alternate;
  }
  .loader-2-67::after, .loader-2-67::before {
    content: "";
    width: 4.8px;
    height: 4.8px;
    border-radius: 4px;
    background: currentColor;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 15px;
    -webkit-animation: animloader66 0.3s 0.45s linear infinite alternate;
            animation: animloader66 0.3s 0.45s linear infinite alternate;
  }
  .loader-2-67::after {
    top: -15px;
    -webkit-animation-delay: 0s;
            animation-delay: 0s;
  }
  
  .loader-2-68 {
    width: 8px;
    height: 48px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    left: -100px;
    -webkit-animation: animloader68 1s linear infinite alternate;
            animation: animloader68 1s linear infinite alternate;
  }
  
  .loader-2-69 {
    width: 20px;
    height: 12px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    color: #FFF;
    background: currentColor;
    -webkit-animation: animloader69 0.6s 0.3s ease infinite alternate;
            animation: animloader69 0.6s 0.3s ease infinite alternate;
  }
  .loader-2-69::after, .loader-2-69::before {
    content: "";
    width: 20px;
    height: 12px;
    background: currentColor;
    position: absolute;
    border-radius: 4px;
    top: 0;
    right: 110%;
    -webkit-animation: animloader69 0.6s ease infinite alternate;
            animation: animloader69 0.6s ease infinite alternate;
  }
  .loader-2-69::after {
    left: 110%;
    right: auto;
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
  }
  
  .loader-2-70 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;
  }
  .loader-2-70::after {
    content: "";
    width: 96px;
    height: 4.8px;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: hitZak 1s linear infinite alternate;
            animation: hitZak 1s linear infinite alternate;
  }
  
  .loader-2-71 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;
  }
  .loader-2-71::after {
    content: "";
    width: 192px;
    height: 4.8px;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: animloader71 2s linear infinite;
            animation: animloader71 2s linear infinite;
  }
  
  .loader-2-72 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;
  }
  .loader-2-72::after {
    content: "";
    width: 0;
    height: 4.8px;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: animFw 10s linear infinite;
            animation: animFw 10s linear infinite;
  }
  
  [data-index="73"] {
    justify-content: normal;
  }
  
  .loader-2-73 {
    width: 0;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: #FFF;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    -webkit-animation: animFw 8s linear infinite;
            animation: animFw 8s linear infinite;
  }
  .loader-2-73::after, .loader-2-73::before {
    content: "";
    width: 10px;
    height: 1px;
    background: #FFF;
    position: absolute;
    top: 9px;
    right: -2px;
    opacity: 0;
    transform: rotate(-45deg) translateX(0px);
    -webkit-animation: coli1 0.3s linear infinite;
            animation: coli1 0.3s linear infinite;
  }
  .loader-2-73::before {
    top: -4px;
    transform: rotate(45deg);
    -webkit-animation: coli2 0.3s linear infinite;
            animation: coli2 0.3s linear infinite;
  }
  
  .loader-2-74 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    overflow: hidden;
  }
  .loader-2-74::after {
    content: "";
    width: 96px;
    height: 4.8px;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: hitZak 0.6s ease-in-out infinite alternate;
            animation: hitZak 0.6s ease-in-out infinite alternate;
  }
  
  .loader-2-75 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    background: rgba(255, 255, 255, 0.15);
    position: relative;
    overflow: hidden;
  }
  .loader-2-75::after {
    content: "";
    width: 0%;
    height: 4.8px;
    background-color: #FFF;
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
    background-size: 15px 15px;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: animFw 6s ease-in infinite;
            animation: animFw 6s ease-in infinite;
  }
  
  .loader-2-76 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    background: rgba(255, 255, 255, 0.15);
    position: relative;
    overflow: hidden;
  }
  .loader-2-76::after {
    content: "";
    width: 0%;
    height: 4.8px;
    background-color: #FFF;
    font-size: 15px;
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
    background-size: 1em 1em;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: animFw 10s ease-in infinite, barStripe 1s linear infinite;
            animation: animFw 10s ease-in infinite, barStripe 1s linear infinite;
  }
  
  .loader-2-77 {
    width: 100%;
    height: 8px;
    display: inline-block;
    position: relative;
    overflow: hidden;
  }
  .loader-2-77::before {
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.15);
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
    background-size: 15px 15px;
    z-index: 10;
  }
  .loader-2-77::after {
    content: "";
    width: 0%;
    height: 100%;
    background-color: #FFF;
    position: absolute;
    border-radius: 0 4px 4px 0;
    top: 0;
    left: 0;
    -webkit-animation: animFw 10s ease-in infinite;
            animation: animFw 10s ease-in infinite;
  }
  
  .loader-2-78 {
    width: 100%;
    height: 12px;
    display: inline-block;
    background-color: #FFF;
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
    font-size: 30px;
    background-size: 1em 1em;
    -webkit-animation: barStripe 1s linear infinite;
            animation: barStripe 1s linear infinite;
  }
  
  .loader-2-79 {
    width: 96px;
    height: 16px;
    display: inline-block;
    background-color: #FFF;
    border: 1px solid #FFF;
    border-radius: 4px;
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
    font-size: 30px;
    background-size: 1em 1em;
    -webkit-animation: barStripe 1s linear infinite;
            animation: barStripe 1s linear infinite;
  }
  
  .loader-2-80 {
    width: 96px;
    height: 24px;
    display: inline-block;
    background-color: #FFF;
    border: 1px solid #FFF;
    border-radius: 4px;
    background: linear-gradient(45deg, transparent 49%, #FFF 50%, #FFF 50%, transparent 51%, transparent), linear-gradient(-45deg, transparent 49%, #FFF 50%, #FFF 50%, transparent 51%, transparent);
    font-size: 15px;
    background-size: 1em 1em;
    -webkit-animation: barStripe 0.6s linear infinite;
            animation: barStripe 0.6s linear infinite;
  }
  
  .loader-2-81 {
    width: 130px;
    height: 48px;
    display: inline-block;
    background: linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000 100%), linear-gradient(45deg, #000 25%, white 25%, white 75%, #000 75%, #000 100%);
    font-size: 10px;
    background-size: 32px 32px;
    -webkit-animation: raceBoard 0.6s linear infinite;
            animation: raceBoard 0.6s linear infinite;
    background-position: 0 0, 16px 16px;
  }
  
  .loader-2-82 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    background-color: #FFF;
    background: radial-gradient(ellipse at center, #FF3D00 0%, #FF3D00 14%, #FFF 15%, #FFF 100%);
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }
  .loader-2-82::after, .loader-2-82::before {
    content: "";
    position: absolute;
    height: 16px;
    width: 4px;
    background: #FF3D00;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) rotate(0deg);
    transform-origin: 25% 0;
    -webkit-animation: rotation 10s linear infinite;
            animation: rotation 10s linear infinite;
  }
  .loader-2-82::before {
    height: 22px;
    width: 2px;
    transform: translateX(-50%) rotate(0deg);
    -webkit-animation-duration: 1s;
            animation-duration: 1s;
  }
  
  .loader-2-83 {
    width: 175px;
    height: 80px;
    position: relative;
  }
  .loader-2-83::before {
    content: "";
    left: 60px;
    bottom: 18px;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #FFF;
    background-image: radial-gradient(circle 8px at 18px 18px, #263238 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, #263238 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, #263238 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, #263238 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, #263238 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, #263238 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, #263238 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, #263238 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, #263238 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, #263238 100%, transparent 0);
    background-repeat: no-repeat;
    -webkit-animation: rotationBack 3s linear infinite;
            animation: rotationBack 3s linear infinite;
  }
  .loader-2-83::after {
    content: "";
    left: 94px;
    bottom: 15px;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #FFF;
    background-image: radial-gradient(circle 5px at 12px 12px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, #263238 100%, transparent 0);
    background-repeat: no-repeat;
    animation: rotationBack 4s linear infinite reverse;
  }
  
  .loader-2-84 {
    width: 15px;
    height: 20px;
    background: #FFF;
    display: inline-block;
    position: relative;
    -webkit-animation: bump 0.4s ease-in infinite alternate;
            animation: bump 0.4s ease-in infinite alternate;
  }
  .loader-2-84::after {
    content: "";
    left: 50%;
    top: 100%;
    transform: translate(-50%, 0);
    position: absolute;
    border: 15px solid transparent;
    border-top-color: #FFF;
  }
  
  .loader-2-85 {
    width: 15px;
    height: 20px;
    background: #FFF;
    display: inline-block;
    position: relative;
    -webkit-animation: bump 0.4s linear infinite alternate;
            animation: bump 0.4s linear infinite alternate;
  }
  .loader-2-85::after {
    content: "";
    left: 50%;
    bottom: 100%;
    transform: translate(-50%, 0);
    position: absolute;
    border: 15px solid transparent;
    border-bottom-color: #FFF;
  }
  
  .loader-2-86 {
    width: 48px;
    height: 12px;
    background: #FFF;
    display: inline-block;
    position: relative;
  }
  .loader-2-86::after {
    content: "";
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    position: absolute;
    border: 15px solid transparent;
    border-top-color: #FFF;
    -webkit-animation: bump 0.4s ease-in-out infinite alternate;
            animation: bump 0.4s ease-in-out infinite alternate;
  }
  .loader-2-86::before {
    content: "";
    left: 50%;
    bottom: 25px;
    transform: translate(-50%, 0);
    position: absolute;
    width: 15px;
    height: 20px;
    background: #FFF;
    -webkit-animation: bump 0.4s ease-in-out infinite alternate;
            animation: bump 0.4s ease-in-out infinite alternate;
  }
  
  .loader-2-87 {
    width: 48px;
    height: 12px;
    background: #FFF;
    display: inline-block;
    position: relative;
  }
  .loader-2-87::after {
    content: "";
    left: 50%;
    top: -47px;
    transform: translate(-50%, 0);
    position: absolute;
    border: 15px solid transparent;
    border-bottom-color: #FFF;
    -webkit-animation: bump 0.4s ease-in-out infinite alternate;
            animation: bump 0.4s ease-in-out infinite alternate;
  }
  .loader-2-87::before {
    content: "";
    left: 50%;
    bottom: 15px;
    transform: translate(-50%, 0);
    position: absolute;
    width: 15px;
    height: 20px;
    background: #FFF;
    -webkit-animation: bump 0.4s ease-in-out infinite alternate;
            animation: bump 0.4s ease-in-out infinite alternate;
  }
  
  .loader-2-88 {
    width: 48px;
    height: 24px;
    display: inline-block;
    position: relative;
    color: #FFF;
    border: 1px solid;
    -webkit-animation: fillX 2s linear infinite;
            animation: fillX 2s linear infinite;
  }
  .loader-2-88::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: #FFF;
    width: 5px;
    height: 12px;
  }
  
  .loader-2-89 {
    width: 48px;
    height: 24px;
    display: inline-block;
    position: relative;
    border: 1px solid #FFF;
  }
  .loader-2-89::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #FFF;
    width: 5px;
    height: 12px;
  }
  .loader-2-89::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    height: 80%;
    width: 6px;
    -webkit-animation: animloader89 2s linear infinite;
            animation: animloader89 2s linear infinite;
  }
  
  .loader-2-90 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    border: 4px solid #FFF;
    -webkit-animation: fill 2s linear infinite alternate;
            animation: fill 2s linear infinite alternate;
    color: rgba(255, 61, 0, 0.9);
    border-radius: 0 0 4px 4px;
  }
  .loader-2-90::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid #FFF;
    width: 20px;
    height: 25px;
    border-radius: 0 4px 4px 0;
  }
  
  .loader-2-91 {
    width: 32px;
    height: 72px;
    display: inline-block;
    position: relative;
    border: 2px solid #FFF;
    -webkit-animation: animloader91 2s linear infinite alternate;
            animation: animloader91 2s linear infinite alternate;
    color: #FF3D00;
    border-radius: 0 0 4px 4px;
    transform: perspective(140px) rotateX(-45deg);
  }
  
  .loader-2-92 {
    width: 48px;
    height: 40px;
    display: inline-block;
    position: relative;
    background: #FFF;
    border-radius: 15% 15% 35% 35%;
  }
  .loader-2-92::after {
    content: "";
    position: absolute;
    left: 45px;
    top: 8px;
    border: 4px solid #FFF;
    width: 16px;
    height: 20px;
    border-radius: 0 4px 4px 0;
  }
  .loader-2-92::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 10px;
    color: #FFF;
    top: -15px;
    left: 11px;
    -webkit-animation: animloader92 1s ease infinite;
            animation: animloader92 1s ease infinite;
  }
  
  .loader-2-93 {
    width: 96px;
    height: 48px;
    display: inline-block;
    position: relative;
    background: #FFF;
    border-radius: 48px 48px 0 0;
    overflow: hidden;
  }
  .loader-2-93::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 12px;
    border-radius: 24px 24px 0 0;
    background: #FF3D00;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
  .loader-2-93::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 32px;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    background: #FF3D00;
    transform-origin: 50% 100%;
    -webkit-animation: animloader93 2s linear infinite alternate;
            animation: animloader93 2s linear infinite alternate;
  }
  
  .loader-2-94 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    border: 3px solid #FFF;
    border-radius: 50%;
    -webkit-animation: animloader94 2s linear infinite;
            animation: animloader94 2s linear infinite;
  }
  .loader-2-94::after {
    content: "";
    width: 6px;
    height: 24px;
    background: #FFF;
    transform: rotate(-45deg);
    position: absolute;
    bottom: -20px;
    left: 46px;
  }
  
  .loader-2-95 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader-2-95::after {
    content: "";
    width: 48px;
    height: 48px;
    left: 0;
    bottom: 0;
    position: absolute;
    border-radius: 50% 50% 0;
    border: 15px solid #FFF;
    transform: rotate(45deg) translate(0, 0);
    -webkit-animation: animMarker 0.4s ease-in-out infinite alternate;
            animation: animMarker 0.4s ease-in-out infinite alternate;
  }
  .loader-2-95::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 150%;
    width: 24px;
    height: 4px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    -webkit-animation: animShadow 0.4s ease-in-out infinite alternate;
            animation: animShadow 0.4s ease-in-out infinite alternate;
  }
  
  .loader-2-96 {
    width: 48px;
    height: 48px;
    background: #FF3D00;
    display: inline-block;
    position: relative;
    animation: rotationBack 1s ease-in-out infinite reverse;
  }
  .loader-2-96::before {
    content: "";
    left: 0;
    top: 0;
    transform: rotate(45deg);
    position: absolute;
    width: 48px;
    height: 48px;
    background: #FF3D00;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
  .loader-2-96::after {
    content: "";
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    background: #FFF;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
  
  .loader-2-97 {
    width: 60px;
    height: 60px;
    display: inline-block;
    position: relative;
    background: radial-gradient(ellipse at center, #FFF 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, #FFF 48%, #FFF 52%, rgba(0, 0, 0, 0) 53%);
    background-size: 20px 20px, 20px auto;
    background-repeat: repeat-x;
    background-position: center bottom, center -5px;
  }
  .loader-2-97::before, .loader-2-97::after {
    content: "";
    position: absolute;
    left: -20px;
    top: 0;
    width: 20px;
    height: 60px;
    background: radial-gradient(ellipse at center, #FFF 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, #FFF 48%, #FFF 52%, rgba(0, 0, 0, 0) 53%);
    background-size: 20px 20px, 20px auto;
    background-repeat: no-repeat;
    background-position: center bottom, center -5px;
    transform: rotate(0deg);
    transform-origin: 50% 0%;
    -webkit-animation: animPend 1s linear infinite alternate;
            animation: animPend 1s linear infinite alternate;
  }
  .loader-2-97::after {
    -webkit-animation: animPend2 1s linear infinite alternate;
            animation: animPend2 1s linear infinite alternate;
    left: 100%;
  }
  
  .loader-2-98 {
    width: 24px;
    height: 80px;
    border: 1px solid #FFF;
    border-radius: 0 0 50px 50px;
    position: relative;
    box-shadow: 0px 0px #FF3D00 inset;
    background-image: linear-gradient(#FF3D00 100px, transparent 0);
    background-position: 0px 0px;
    background-size: 22px 80px;
    background-repeat: no-repeat;
    -webkit-animation: animloader98 6s linear infinite;
            animation: animloader98 6s linear infinite;
  }
  .loader-2-98::after {
    content: "";
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    border: 1px solid #FFF;
    border-radius: 50%;
    width: 28px;
    height: 6px;
  }
  .loader-2-98::before {
    content: "";
    left: 0;
    bottom: -4px;
    border-radius: 50%;
    position: absolute;
    width: 6px;
    height: 6px;
    -webkit-animation: animloader98s 6s linear infinite;
            animation: animloader98s 6s linear infinite;
  }
  
  .loader-2-99 {
    width: 20px;
    height: 20px;
    margin-top: 80px;
    border-radius: 50%;
    background: #FF3D00;
    border: 5px solid #FFF;
    position: relative;
  }
  .loader-2-99::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    width: 8px;
    height: 80px;
    border: 2px solid #FFF;
    border-bottom: none;
    background: #FFF;
    color: #FF3D00;
    border-radius: 50px 50px 0 0;
    box-shadow: 0px 0px inset;
    -webkit-animation: animloader99 6s linear infinite;
            animation: animloader99 6s linear infinite;
  }
  
  .loader-2-100 {
    width: 180px;
    height: 140px;
    background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 15px at 15px 15px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
    background-size: 50px 50px, 100px 75px, 50px 50px, 30px 32px, 136px 20px;
    background-repeat: no-repeat;
    background-position: 0px 30px, 30px 0px, 113px 29px, 147px 50px, 23px 60px;
    position: relative;
  }
  .loader-2-100::after {
    content: "";
    position: absolute;
    left: 2px;
    top: 65px;
    width: 2px;
    height: 6px;
    color: #FFF;
    -webkit-animation: animloader100 0.6s linear infinite;
            animation: animloader100 0.6s linear infinite;
  }
  
  .loader-2-101 {
    width: 175px;
    height: 80px;
    background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
    background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
    background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
    background-repeat: no-repeat;
    position: relative;
  }
  .loader-2-101::after {
    content: "";
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    position: absolute;
    border: 15px solid transparent;
    border-top-color: #FF3D00;
    -webkit-animation: fadePush 1s linear infinite;
            animation: fadePush 1s linear infinite;
  }
  .loader-2-101::before {
    content: "";
    left: 50%;
    bottom: 30px;
    transform: translate(-50%, 0);
    position: absolute;
    width: 15px;
    height: 15px;
    background: #FF3D00;
    -webkit-animation: fadePush 1s linear infinite;
            animation: fadePush 1s linear infinite;
  }
  
  .loader-2-102 {
    width: 175px;
    height: 80px;
    background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
    background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
    background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
    background-repeat: no-repeat;
    position: relative;
  }
  .loader-2-102::after {
    content: "";
    left: 50%;
    bottom: 30px;
    transform: translate(-50%, 0);
    position: absolute;
    border: 15px solid transparent;
    border-bottom-color: #FF3D00;
    -webkit-animation: fadePull 1s linear infinite;
            animation: fadePull 1s linear infinite;
  }
  .loader-2-102::before {
    content: "";
    left: 50%;
    bottom: 15px;
    transform: translate(-50%, 0);
    position: absolute;
    width: 15px;
    height: 15px;
    background: #FF3D00;
    -webkit-animation: fadePull 1s linear infinite;
            animation: fadePull 1s linear infinite;
  }
  
  .loader-2-103 {
    width: 175px;
    height: 80px;
    background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
    background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
    background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
    background-repeat: no-repeat;
    position: relative;
  }
  .loader-2-103::after {
    content: "";
    left: 0;
    right: 0;
    margin: auto;
    bottom: 20px;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-color: #FF3D00 transparent;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
  }
  
  .loader-2-104 {
    width: 175px;
    height: 80px;
    background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
    background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
    background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
    background-repeat: no-repeat;
    position: relative;
  }
  .loader-2-104::before {
    content: "";
    left: 60px;
    bottom: 18px;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #FF3D00;
    background-image: radial-gradient(circle 8px at 18px 18px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, #FFF 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, #FFF 100%, transparent 0);
    background-repeat: no-repeat;
    -webkit-animation: rotationBack 3s linear infinite;
            animation: rotationBack 3s linear infinite;
  }
  .loader-2-104::after {
    content: "";
    left: 94px;
    bottom: 15px;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #FF3D00;
    background-image: radial-gradient(circle 5px at 12px 12px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, #FFF 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, #FFF 100%, transparent 0);
    background-repeat: no-repeat;
    animation: rotationBack 4s linear infinite reverse;
  }
  
  .loader-2-105 {
    width: 175px;
    height: 80px;
    background-image: linear-gradient(#263238 50px, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
    background-size: 64px 6px, 50px 50px, 100px 76px, 50px 50px, 120px 40px;
    background-position: 55px 60px, 0px 30px, 37px 0px, 122px 30px, 25px 40px;
    background-repeat: no-repeat;
    position: relative;
  }
  .loader-2-105::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(-180deg);
    top: 62px;
    height: 64px;
    width: 60px;
    background-color: #FFF;
    background-image: linear-gradient(#DDD 20px, transparent 0), linear-gradient(#DDD 5px, transparent 0), linear-gradient(#DDD 10px, transparent 0), linear-gradient(#DDD 10px, transparent 0);
    background-size: 50px 20px;
    background-position: 5px 36px, 5px 25px, 5px 10px;
    background-repeat: no-repeat;
    border-radius: 2px 2px 4px 4px;
    z-index: 10;
    box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.5);
    -webkit-animation: animloader105 4s linear infinite;
            animation: animloader105 4s linear infinite;
  }
  
  .loader-2-106 {
    width: 32px;
    height: 90px;
    margin-bottom: 20px;
    position: relative;
    border-radius: 50% 50% 0 0;
    border-bottom: 10px solid #FF3D00;
    background-color: #FFF;
    background-image: radial-gradient(ellipse at center, #FFF 34%, #FF3D00 35%, #FF3D00 54%, #FFF 55%), linear-gradient(#FF3D00 10px, transparent 0);
    background-size: 28px 28px;
    background-position: center 20px, center 2px;
    background-repeat: no-repeat;
    -webkit-animation: animloader106back 1s linear infinite alternate;
            animation: animloader106back 1s linear infinite alternate;
  }
  .loader-2-106::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 44px;
    border-radius: 50%;
    box-shadow: 0px 15px #FF3D00 inset;
    top: 67px;
  }
  .loader-2-106::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 34px;
    height: 34px;
    top: 112%;
    background: radial-gradient(ellipse at center, #ffdf00 8%, rgba(249, 62, 0, 0.6) 24%, rgba(0, 0, 0, 0) 100%);
    border-radius: 50% 50% 0;
    background-repeat: no-repeat;
    background-position: -44px -44px;
    background-size: 100px 100px;
    box-shadow: 4px 4px 12px 0px rgba(255, 61, 0, 0.5);
    -webkit-animation: animloader106 1s linear infinite alternate;
            animation: animloader106 1s linear infinite alternate;
  }
  
  .loader-2-107 {
    width: 106px;
    height: 56px;
    background-image: linear-gradient(#FFF 50px, transparent 0), linear-gradient(#FFF 50px, transparent 0), linear-gradient(#FFF 50px, transparent 0), linear-gradient(#FFF 50px, transparent 0), radial-gradient(circle 14px, #FFF 100%, transparent 0);
    background-size: 48px 15px, 15px 35px, 15px 35px, 25px 15px, 28px 28px;
    background-position: 25px 5px, 58px 20px, 25px 17px, 2px 37px, 76px 0px;
    background-repeat: no-repeat;
    position: relative;
    transform: rotate(-45deg);
  }
  .loader-2-107::after, .loader-2-107::before {
    content: "";
    position: absolute;
    width: 56px;
    height: 56px;
    border: 6px solid #FFF;
    border-radius: 50%;
    left: -45px;
    top: -10px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#FFF 64px, transparent 0), linear-gradient(#FFF 66px, transparent 0), radial-gradient(circle 4px, #FFF 100%, transparent 0);
    background-size: 40px 1px, 1px 40px, 8px 8px;
    background-position: center center;
    -webkit-animation: rotation 0.3s linear infinite;
            animation: rotation 0.3s linear infinite;
  }
  .loader-2-107::before {
    left: 25px;
    top: 60px;
  }
  
  .loader-2-108 {
    width: 48px;
    height: 24px;
    color: #FFF;
    background: currentColor;
    border-radius: 50% 50% 0 0;
    position: relative;
    margin-top: 36px;
    -webkit-animation: animloader108 4s linear infinite;
            animation: animloader108 4s linear infinite;
  }
  .loader-2-108::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: currentColor;
    top: -34px;
    -webkit-animation: animloader108s 4s linear infinite;
            animation: animloader108s 4s linear infinite;
  }
  
  .loader-2-109 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #FF3D00;
    letter-spacing: 2px;
    position: relative;
  }
  .loader-2-109::after {
    content: "Loading";
    position: absolute;
    left: 0;
    top: 0;
    color: #FFF;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-animation: animloader110 6s linear infinite;
            animation: animloader110 6s linear infinite;
  }
  
  .loader-2-110 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #FFF;
    letter-spacing: 2px;
    position: relative;
  }
  .loader-2-110::after {
    content: "Loading";
    position: absolute;
    left: 0;
    top: 0;
    color: #263238;
    text-shadow: 0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-animation: animloader110 6s linear infinite;
            animation: animloader110 6s linear infinite;
  }
  
  .loader-2-111 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #263238;
    text-shadow: 0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF;
    letter-spacing: 2px;
    position: relative;
  }
  .loader-2-111::after {
    content: "Loading";
    position: absolute;
    left: 0;
    top: 0;
    color: #FFF;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-animation: animloader111 6s linear infinite;
            animation: animloader111 6s linear infinite;
  }
  
  .loader-2-112 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #FFF;
    position: relative;
  }
  .loader-2-112::before {
    content: "";
    position: absolute;
    left: 34px;
    bottom: 8px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    -webkit-animation: rotation 0.6s linear infinite;
            animation: rotation 0.6s linear infinite;
  }
  
  .loader-2-113 {
    color: #FFF;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    letter-spacing: 4px;
  }
  .loader-2-113::before {
    content: "";
    position: absolute;
    right: 70px;
    bottom: 10px;
    height: 28px;
    width: 5.15px;
    background: currentColor;
    -webkit-animation: animloader113L 1s linear infinite alternate;
            animation: animloader113L 1s linear infinite alternate;
  }
  .loader-2-113::after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    left: 125px;
    top: 2px;
    border-radius: 50%;
    background: red;
    -webkit-animation: animloader113 1s linear infinite alternate;
            animation: animloader113 1s linear infinite alternate;
  }
  
  .loader-2-114 {
    color: #FFF;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    letter-spacing: 4px;
  }
  .loader-2-114::before {
    content: "";
    position: absolute;
    right: 70px;
    bottom: 10px;
    height: 28px;
    width: 5.15px;
    background: currentColor;
  }
  .loader-2-114::after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    left: 125px;
    top: 2px;
    border-radius: 50%;
    background: red;
    -webkit-animation: animloader114 1s ease-in infinite;
            animation: animloader114 1s ease-in infinite;
  }
  
  .loader-2-115 {
    color: #FFF;
    position: relative;
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .loader-2-115::after {
    content: "";
    width: 5px;
    height: 5px;
    background: currentColor;
    position: absolute;
    bottom: 10px;
    right: -5px;
    -webkit-animation: animloader115 1s linear infinite;
            animation: animloader115 1s linear infinite;
  }
  
  .loader-2-116 {
    color: #FFF;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    letter-spacing: 4px;
  }
  .loader-2-116::before {
    content: "";
    position: absolute;
    right: 70px;
    bottom: 10px;
    height: 28px;
    width: 5px;
    background: currentColor;
  }
  .loader-2-116::after {
    content: "";
    width: 4px;
    height: 4px;
    background: currentColor;
    position: absolute;
    right: 70px;
    top: 8px;
    -webkit-animation: animloader116 0.6s ease-out infinite alternate;
            animation: animloader116 0.6s ease-out infinite alternate;
  }
  
  .loader-2-117 {
    color: #FFF;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    letter-spacing: 4px;
  }
  .loader-2-117::before {
    content: "";
    position: absolute;
    right: 68px;
    bottom: 10px;
    height: 28px;
    width: 7px;
    outline: 1px solid #FFF;
    color: #FF3D00;
    -webkit-animation: animloader117 1s linear infinite alternate;
            animation: animloader117 1s linear infinite alternate;
  }
  .loader-2-117::after {
    content: "";
    width: 4px;
    height: 4px;
    background: #FF3D00;
    position: absolute;
    right: 70px;
    top: 8px;
    -webkit-animation: animloader116 1s ease-out infinite alternate;
            animation: animloader116 1s ease-out infinite alternate;
  }
  
  .loader-2-118 {
    position: relative;
  }
  .loader-2-118::before {
    content: "Loading";
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    letter-spacing: 2px;
    display: inline-block;
    -webkit-animation: floating 1s ease-out infinite alternate;
            animation: floating 1s ease-out infinite alternate;
  }
  .loader-2-118::after {
    content: "";
    width: 100%;
    height: 10px;
    background: rgba(0, 0, 0, 0.15);
    position: absolute;
    left: 0;
    top: 100%;
    filter: blur(4px);
    border-radius: 50%;
    -webkit-animation: animloader118 1s ease-out infinite alternate;
            animation: animloader118 1s ease-out infinite alternate;
  }
  
  .loader-2-119 {
    font-size: 48px;
    letter-spacing: 2px;
    font-family: Arial, Helvetica, sans-serif;
    color: #FFF;
    -webkit-animation: animloader119 1s ease-in infinite alternate;
            animation: animloader119 1s ease-in infinite alternate;
  }
  
  .loader-2-120 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #FF3D00;
    letter-spacing: 2px;
    position: relative;
  }
  .loader-2-120::after {
    content: "Loading";
    position: absolute;
    left: 0;
    top: 0;
    color: #FFF;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-animation: animloader111 10s ease-in infinite;
            animation: animloader111 10s ease-in infinite;
  }
  
  .loader-2-121 {
    width: 95%;
    height: 100px;
    background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), radial-gradient(circle 50px at 50px 50px, #FFF 99%, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
    background-repeat: no-repeat;
    background-size: 75px 100px, 100px 100px, 125px 20px, 260px 20px, 260px 20px;
    background-position: -50% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
    -webkit-animation: animloader121 1s linear infinite;
            animation: animloader121 1s linear infinite;
  }
  
  .loader-2-122 {
    width: 95%;
    height: 100px;
    background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), linear-gradient(#FFF 100px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
    background-repeat: no-repeat;
    background-size: 75px 100px, 100px 100px, 125px 20px, 260px 20px, 260px 20px;
    background-position: -50% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
    -webkit-animation: animloader121 1s linear infinite;
            animation: animloader121 1s linear infinite;
  }
  
  .loader-2-123 {
    width: 95%;
    height: 100px;
    position: relative;
    background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
    background-repeat: no-repeat;
    background-size: 75px 100px, 125px 20px, 260px 20px, 260px 20px;
    background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
    -webkit-animation: animloader123 1s linear infinite;
            animation: animloader123 1s linear infinite;
  }
  .loader-2-123::after {
    content: "";
    width: 100px;
    height: 100px;
    border-radius: 8px;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .loader-2-124 {
    width: 320px;
    height: 150px;
    position: relative;
    background: #FFF;
  }
  .loader-2-124::after {
    content: "";
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    top: 15px;
    left: 15px;
    position: absolute;
    background-image: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 80%), linear-gradient(#DDD 56px, transparent 0), linear-gradient(#DDD 24px, transparent 0), linear-gradient(#DDD 18px, transparent 0), linear-gradient(#DDD 66px, transparent 0);
    background-repeat: no-repeat;
    background-size: 75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px;
    background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
    -webkit-animation: animloader124 1s linear infinite;
            animation: animloader124 1s linear infinite;
  }
  
  .loader-2-125 {
    width: 320px;
    height: 150px;
    position: relative;
    background: #FFF;
  }
  .loader-2-125::after {
    content: "";
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    top: 15px;
    left: 15px;
    position: absolute;
    background-image: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 80%), radial-gradient(circle 28px at 28px 28px, #DDD 99%, transparent 0), linear-gradient(#DDD 24px, transparent 0), linear-gradient(#DDD 18px, transparent 0), linear-gradient(#DDD 66px, transparent 0);
    background-repeat: no-repeat;
    background-size: 75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px;
    background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
    -webkit-animation: animloader124 1s linear infinite;
            animation: animloader124 1s linear infinite;
  }
  
  .loader-2-126 {
    width: 164px;
    height: 170px;
    position: relative;
    background: #FFF;
  }
  .loader-2-126::after {
    content: "";
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    top: 15px;
    left: 15px;
    position: absolute;
    background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 100%), linear-gradient(#DDD 74px, transparent 0), linear-gradient(#DDD 16px, transparent 0), linear-gradient(#DDD 24px, transparent 0);
    background-repeat: no-repeat;
    background-size: 50px 170px, 100% 74px, 100% 16px, 100% 32px;
    background-position: 0 0, 0 0, 0px 85px, 0px 110px;
    -webkit-animation: animloader126 1s linear infinite;
            animation: animloader126 1s linear infinite;
  }
  
  * keyFrames *
  @-webkit-keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  @-webkit-keyframes rotationBreak {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBreak {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes zeroRotation {
    0% {
      transform: scale(1) rotate(0deg);
    }
    100% {
      transform: scale(0) rotate(360deg);
    }
  }
  @keyframes zeroRotation {
    0% {
      transform: scale(1) rotate(0deg);
    }
    100% {
      transform: scale(0) rotate(360deg);
    }
  }
  @-webkit-keyframes shadowExpandX {
    0% {
      box-shadow: 0 0, 0 0;
      color: rgba(255, 255, 255, 0.2);
    }
    100% {
      box-shadow: -24px 0, 24px 0;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  @keyframes shadowExpandX {
    0% {
      box-shadow: 0 0, 0 0;
      color: rgba(255, 255, 255, 0.2);
    }
    100% {
      box-shadow: -24px 0, 24px 0;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  @-webkit-keyframes shadowPulse {
    33% {
      background: #FFF;
      box-shadow: -24px 0 #FF3D00, 24px 0 #FFF;
    }
    66% {
      background: #FF3D00;
      box-shadow: -24px 0 #FFF, 24px 0 #FFF;
    }
    100% {
      background: #FFF;
      box-shadow: -24px 0 #FFF, 24px 0 #FF3D00;
    }
  }
  @keyframes shadowPulse {
    33% {
      background: #FFF;
      box-shadow: -24px 0 #FF3D00, 24px 0 #FFF;
    }
    66% {
      background: #FF3D00;
      box-shadow: -24px 0 #FFF, 24px 0 #FFF;
    }
    100% {
      background: #FFF;
      box-shadow: -24px 0 #FFF, 24px 0 #FF3D00;
    }
  }
  @-webkit-keyframes shadowRolling {
    0% {
      box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    12% {
      box-shadow: 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    36% {
      box-shadow: 120px 0 white, 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 130px 0 white, 120px 0 white, 110px 0 white, 100px 0 white;
    }
    62% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white, 110px 0 white;
    }
    75% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white;
    }
    87% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white;
    }
    100% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
    }
  }
  @keyframes shadowRolling {
    0% {
      box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    12% {
      box-shadow: 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    36% {
      box-shadow: 120px 0 white, 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 130px 0 white, 120px 0 white, 110px 0 white, 100px 0 white;
    }
    62% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white, 110px 0 white;
    }
    75% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white;
    }
    87% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white;
    }
    100% {
      box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
    }
  }
  @-webkit-keyframes animloader14 {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  @keyframes animloader14 {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  @-webkit-keyframes scale50 {
    0%, 100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
  @keyframes scale50 {
    0%, 100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
  @-webkit-keyframes scaleOut {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes scaleOut {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @-webkit-keyframes animloader27 {
    0%, 100% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      transform: scale(1);
      opacity: 0;
    }
  }
  @keyframes animloader27 {
    0%, 100% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      transform: scale(1);
      opacity: 0;
    }
  }
  @-webkit-keyframes animloader28 {
    0% {
      box-shadow: -72px 0 #FFF inset;
    }
    100% {
      box-shadow: 48px 0 #FFF inset;
    }
  }
  @keyframes animloader28 {
    0% {
      box-shadow: -72px 0 #FFF inset;
    }
    100% {
      box-shadow: 48px 0 #FFF inset;
    }
  }
  @-webkit-keyframes animloader38 {
    50% {
      transform: scale(1) translate(-50%, -50%);
    }
  }
  @keyframes animloader38 {
    50% {
      transform: scale(1) translate(-50%, -50%);
    }
  }
  @-webkit-keyframes animloader42 {
    0% {
      box-shadow: -38px -6px, -14px 6px, 14px -6px;
    }
    33% {
      box-shadow: -38px 6px, -14px -6px, 14px 6px;
    }
    66% {
      box-shadow: -38px -6px, -14px 6px, 14px -6px;
    }
    100% {
      box-shadow: -38px 6px, -14px -6px, 14px 6px;
    }
  }
  @keyframes animloader42 {
    0% {
      box-shadow: -38px -6px, -14px 6px, 14px -6px;
    }
    33% {
      box-shadow: -38px 6px, -14px -6px, 14px 6px;
    }
    66% {
      box-shadow: -38px -6px, -14px 6px, 14px -6px;
    }
    100% {
      box-shadow: -38px 6px, -14px -6px, 14px 6px;
    }
  }
  @-webkit-keyframes animloader44 {
    0% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
    25% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 2px;
    }
    50% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 2px, -38px 0 0 -2px;
    }
    75% {
      box-shadow: 14px 0 0 2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
    100% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
  }
  @keyframes animloader44 {
    0% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
    25% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 2px;
    }
    50% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 2px, -38px 0 0 -2px;
    }
    75% {
      box-shadow: 14px 0 0 2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
    100% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
  }
  @-webkit-keyframes animloader45 {
    0% {
      box-shadow: -38px -12px, -14px 0, 14px 0, 38px 0;
    }
    33% {
      box-shadow: -38px 0px, -14px -12px, 14px 0, 38px 0;
    }
    66% {
      box-shadow: -38px 0px, -14px 0, 14px -12px, 38px 0;
    }
    100% {
      box-shadow: -38px 0, -14px 0, 14px 0, 38px -12px;
    }
  }
  @keyframes animloader45 {
    0% {
      box-shadow: -38px -12px, -14px 0, 14px 0, 38px 0;
    }
    33% {
      box-shadow: -38px 0px, -14px -12px, 14px 0, 38px 0;
    }
    66% {
      box-shadow: -38px 0px, -14px 0, 14px -12px, 38px 0;
    }
    100% {
      box-shadow: -38px 0, -14px 0, 14px 0, 38px -12px;
    }
  }
  @-webkit-keyframes animloader46 {
    0% {
      background: white;
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    14% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px white, 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    28% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px white, 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    42% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px white, 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    57% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px white, 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    71% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px white, 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    85% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px white;
    }
    100% {
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
  }
  @keyframes animloader46 {
    0% {
      background: white;
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    14% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px white, 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    28% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px white, 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    42% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px white, 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    57% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px white, 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    71% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px white, 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
    85% {
      background: rgba(255, 255, 255, 0);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px white;
    }
    100% {
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0);
    }
  }
  @-webkit-keyframes animloader34 {
    0% {
      border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75);
    }
    33% {
      border-color: rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35);
    }
    66% {
      border-color: rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25);
    }
    100% {
      border-color: rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15);
    }
  }
  @keyframes animloader34 {
    0% {
      border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75);
    }
    33% {
      border-color: rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35);
    }
    66% {
      border-color: rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25);
    }
    100% {
      border-color: rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15);
    }
  }
  @-webkit-keyframes animloader51 {
    0% {
      border-color: white rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    }
    33% {
      border-color: white white rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    }
    66% {
      border-color: white white white rgba(255, 255, 255, 0);
    }
    100% {
      border-color: white white white white;
    }
  }
  @keyframes animloader51 {
    0% {
      border-color: white rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    }
    33% {
      border-color: white white rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    }
    66% {
      border-color: white white white rgba(255, 255, 255, 0);
    }
    100% {
      border-color: white white white white;
    }
  }
  @-webkit-keyframes animloader57 {
    0% {
      box-shadow: 0 0, 0 0, 0 0;
    }
    33% {
      box-shadow: 24px 0px, 24px 0px, 24px 0px;
    }
    66% {
      box-shadow: 24px 24px, 24px 24px, 24px 0px;
    }
    100% {
      box-shadow: 0px 24px, 24px 24px, 24px 0px;
    }
  }
  @keyframes animloader57 {
    0% {
      box-shadow: 0 0, 0 0, 0 0;
    }
    33% {
      box-shadow: 24px 0px, 24px 0px, 24px 0px;
    }
    66% {
      box-shadow: 24px 24px, 24px 24px, 24px 0px;
    }
    100% {
      box-shadow: 0px 24px, 24px 24px, 24px 0px;
    }
  }
  @-webkit-keyframes animloader58 {
    0%, 32% {
      box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    33%, 65% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    66%, 99% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white;
    }
  }
  @keyframes animloader58 {
    0%, 32% {
      box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    33%, 65% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    66%, 99% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white;
    }
  }
  @-webkit-keyframes animloader58m {
    0% {
      transform: translate(0, 0) rotateX(0) rotateY(0);
    }
    33% {
      transform: translate(100%, 0) rotateX(0) rotateY(180deg);
    }
    66% {
      transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
    }
    100% {
      transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
    }
  }
  @keyframes animloader58m {
    0% {
      transform: translate(0, 0) rotateX(0) rotateY(0);
    }
    33% {
      transform: translate(100%, 0) rotateX(0) rotateY(180deg);
    }
    66% {
      transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
    }
    100% {
      transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
    }
  }
  @-webkit-keyframes flipX {
    0% {
      transform: perspective(200px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
    }
  }
  @keyframes flipX {
    0% {
      transform: perspective(200px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
    }
  }
  @-webkit-keyframes fill {
    0% {
      box-shadow: 0 0 inset;
    }
    100% {
      box-shadow: 0 -48px inset;
    }
  }
  @keyframes fill {
    0% {
      box-shadow: 0 0 inset;
    }
    100% {
      box-shadow: 0 -48px inset;
    }
  }
  @-webkit-keyframes fillX {
    0% {
      box-shadow: 0 0 inset;
    }
    100% {
      box-shadow: 48px 0 inset;
    }
  }
  @keyframes fillX {
    0% {
      box-shadow: 0 0 inset;
    }
    100% {
      box-shadow: 48px 0 inset;
    }
  }
  @-webkit-keyframes animloader56 {
    0% {
      transform: translate(0, 0) rotateX(0) rotateY(0);
    }
    25% {
      transform: translate(100%, 0) rotateX(0) rotateY(180deg);
    }
    50% {
      transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
    }
    75% {
      transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
    }
    100% {
      transform: translate(0, 0) rotateX(0) rotateY(360deg);
    }
  }
  @keyframes animloader56 {
    0% {
      transform: translate(0, 0) rotateX(0) rotateY(0);
    }
    25% {
      transform: translate(100%, 0) rotateX(0) rotateY(180deg);
    }
    50% {
      transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
    }
    75% {
      transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
    }
    100% {
      transform: translate(0, 0) rotateX(0) rotateY(360deg);
    }
  }
  @-webkit-keyframes animloader59 {
    0% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    12% {
      box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    37% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white;
    }
    62% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px white, 24px 48px white, 0px 48px white;
    }
    75% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px white, 0px 48px white;
    }
    87% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px white;
    }
    100% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
  }
  @keyframes animloader59 {
    0% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    12% {
      box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    37% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white;
    }
    62% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px white, 24px 48px white, 0px 48px white;
    }
    75% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px white, 0px 48px white;
    }
    87% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px white;
    }
    100% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
  }
  @-webkit-keyframes animloader60 {
    0% {
      top: 0;
      color: white;
    }
    50% {
      top: 30px;
      color: rgba(255, 255, 255, 0.2);
    }
    100% {
      top: 0;
      color: white;
    }
  }
  @keyframes animloader60 {
    0% {
      top: 0;
      color: white;
    }
    50% {
      top: 30px;
      color: rgba(255, 255, 255, 0.2);
    }
    100% {
      top: 0;
      color: white;
    }
  }
  @-webkit-keyframes animloader61 {
    0% {
      height: 48px;
    }
    100% {
      height: 4.8px;
    }
  }
  @keyframes animloader61 {
    0% {
      height: 48px;
    }
    100% {
      height: 4.8px;
    }
  }
  @-webkit-keyframes animloader61m {
    0% {
      height: 40px;
      transform: translateY(0);
    }
    100% {
      height: 10px;
      transform: translateY(30px);
    }
  }
  @keyframes animloader61m {
    0% {
      height: 40px;
      transform: translateY(0);
    }
    100% {
      height: 10px;
      transform: translateY(30px);
    }
  }
  @-webkit-keyframes animloader63 {
    0% {
      box-shadow: 20px 0 rgba(255, 255, 255, 0.25), 40px 0 white, 60px 0 white;
    }
    50% {
      box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0.25), 60px 0 white;
    }
    100% {
      box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0.25);
    }
  }
  @keyframes animloader63 {
    0% {
      box-shadow: 20px 0 rgba(255, 255, 255, 0.25), 40px 0 white, 60px 0 white;
    }
    50% {
      box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0.25), 60px 0 white;
    }
    100% {
      box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0.25);
    }
  }
  @-webkit-keyframes animloader64 {
    0% {
      box-shadow: 20px -10px, 40px 10px, 60px 0px;
    }
    25% {
      box-shadow: 20px 0px, 40px 0px, 60px 10px;
    }
    50% {
      box-shadow: 20px 10px, 40px -10px, 60px 0px;
    }
    75% {
      box-shadow: 20px 0px, 40px 0px, 60px -10px;
    }
    100% {
      box-shadow: 20px -10px, 40px 10px, 60px 0px;
    }
  }
  @keyframes animloader64 {
    0% {
      box-shadow: 20px -10px, 40px 10px, 60px 0px;
    }
    25% {
      box-shadow: 20px 0px, 40px 0px, 60px 10px;
    }
    50% {
      box-shadow: 20px 10px, 40px -10px, 60px 0px;
    }
    75% {
      box-shadow: 20px 0px, 40px 0px, 60px -10px;
    }
    100% {
      box-shadow: 20px -10px, 40px 10px, 60px 0px;
    }
  }
  @-webkit-keyframes animloader65 {
    0% {
      box-shadow: -10px 20px, 10px 35px, 0px 50px;
    }
    25% {
      box-shadow: 0px 20px, 0px 35px, 10px 50px;
    }
    50% {
      box-shadow: 10px 20px, -10px 35px, 0px 50px;
    }
    75% {
      box-shadow: 0px 20px, 0px 35px, -10px 50px;
    }
    100% {
      box-shadow: -10px 20px, 10px 35px, 0px 50px;
    }
  }
  @keyframes animloader65 {
    0% {
      box-shadow: -10px 20px, 10px 35px, 0px 50px;
    }
    25% {
      box-shadow: 0px 20px, 0px 35px, 10px 50px;
    }
    50% {
      box-shadow: 10px 20px, -10px 35px, 0px 50px;
    }
    75% {
      box-shadow: 0px 20px, 0px 35px, -10px 50px;
    }
    100% {
      box-shadow: -10px 20px, 10px 35px, 0px 50px;
    }
  }
  @-webkit-keyframes animloader66 {
    0% {
      width: 4.8px;
    }
    100% {
      width: 48px;
    }
  }
  @keyframes animloader66 {
    0% {
      width: 4.8px;
    }
    100% {
      width: 48px;
    }
  }
  @-webkit-keyframes animloader68 {
    0% {
      box-shadow: 20px 0 rgba(255, 255, 255, 0), 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
    }
    20% {
      box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
    }
    40% {
      box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
    }
    60% {
      box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
    }
    80% {
      box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 white;
    }
  }
  @keyframes animloader68 {
    0% {
      box-shadow: 20px 0 rgba(255, 255, 255, 0), 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
    }
    20% {
      box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
    }
    40% {
      box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
    }
    60% {
      box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
    }
    80% {
      box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 white;
    }
  }
  @-webkit-keyframes animloader69 {
    0% {
      width: 20px;
    }
    100% {
      width: 48px;
    }
  }
  @keyframes animloader69 {
    0% {
      width: 20px;
    }
    100% {
      width: 48px;
    }
  }
  @-webkit-keyframes animloader71 {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
  @keyframes animloader71 {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
  @-webkit-keyframes animloader89 {
    0% {
      box-shadow: 11px 0 rgba(255, 255, 255, 0), 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 11px 0 white, 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 11px 0 white, 22px 0 white, 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    75% {
      box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 white;
    }
  }
  @keyframes animloader89 {
    0% {
      box-shadow: 11px 0 rgba(255, 255, 255, 0), 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 11px 0 white, 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 11px 0 white, 22px 0 white, 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    75% {
      box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 white;
    }
  }
  @-webkit-keyframes animloader91 {
    0% {
      box-shadow: 0 0 inset;
    }
    100% {
      box-shadow: 0 -70px inset;
    }
  }
  @keyframes animloader91 {
    0% {
      box-shadow: 0 0 inset;
    }
    100% {
      box-shadow: 0 -70px inset;
    }
  }
  @-webkit-keyframes animloader92 {
    0% {
      box-shadow: 2px 0px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0.3), 20px 0px rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 2px -5px rgba(255, 255, 255, 0.5), 12px -3px rgba(255, 255, 255, 0.5), 20px -2px rgba(255, 255, 255, 0.6);
    }
    100% {
      box-shadow: 2px -8px rgba(255, 255, 255, 0), 12px -5px rgba(255, 255, 255, 0), 20px -5px rgba(255, 255, 255, 0);
    }
  }
  @keyframes animloader92 {
    0% {
      box-shadow: 2px 0px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0.3), 20px 0px rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 2px -5px rgba(255, 255, 255, 0.5), 12px -3px rgba(255, 255, 255, 0.5), 20px -2px rgba(255, 255, 255, 0.6);
    }
    100% {
      box-shadow: 2px -8px rgba(255, 255, 255, 0), 12px -5px rgba(255, 255, 255, 0), 20px -5px rgba(255, 255, 255, 0);
    }
  }
  @-webkit-keyframes animloader93 {
    0% {
      transform: rotate(-70deg);
    }
    10% {
      transform: rotate(-40deg);
    }
    20%, 45%, 35% {
      transform: rotate(-10deg);
    }
    40%, 30% {
      transform: rotate(-30deg);
    }
    50%, 60% {
      transform: rotate(20deg);
    }
    55%, 65%, 75% {
      transform: rotate(40deg);
    }
    70% {
      transform: rotate(45deg);
    }
    85%, 90% {
      transform: rotate(50deg);
    }
    95% {
      transform: rotate(75deg);
    }
    100%, 93% {
      transform: rotate(70deg);
    }
  }
  @keyframes animloader93 {
    0% {
      transform: rotate(-70deg);
    }
    10% {
      transform: rotate(-40deg);
    }
    20%, 45%, 35% {
      transform: rotate(-10deg);
    }
    40%, 30% {
      transform: rotate(-30deg);
    }
    50%, 60% {
      transform: rotate(20deg);
    }
    55%, 65%, 75% {
      transform: rotate(40deg);
    }
    70% {
      transform: rotate(45deg);
    }
    85%, 90% {
      transform: rotate(50deg);
    }
    95% {
      transform: rotate(75deg);
    }
    100%, 93% {
      transform: rotate(70deg);
    }
  }
  @-webkit-keyframes animloader94 {
    0% {
      transform: translate(-10px, -10px);
    }
    25% {
      transform: translate(-10px, 10px);
    }
    50% {
      transform: translate(10px, 10px);
    }
    75% {
      transform: translate(10px, -10px);
    }
    100% {
      transform: translate(-10px, -10px);
    }
  }
  @keyframes animloader94 {
    0% {
      transform: translate(-10px, -10px);
    }
    25% {
      transform: translate(-10px, 10px);
    }
    50% {
      transform: translate(10px, 10px);
    }
    75% {
      transform: translate(10px, -10px);
    }
    100% {
      transform: translate(-10px, -10px);
    }
  }
  @-webkit-keyframes animloader98 {
    0% {
      background-position: 0px 80px;
    }
    100% {
      background-position: 0px 0px;
    }
  }
  @keyframes animloader98 {
    0% {
      background-position: 0px 80px;
    }
    100% {
      background-position: 0px 0px;
    }
  }
  @-webkit-keyframes animloader98s {
    0% {
      box-shadow: 4px -10px rgba(255, 255, 255, 0), 6px 0px rgba(255, 255, 255, 0), 8px -15px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0);
    }
    20% {
      box-shadow: 4px -20px rgba(255, 255, 255, 0), 8px -10px rgba(255, 255, 255, 0), 10px -30px rgba(255, 255, 255, 0.5), 15px -5px rgba(255, 255, 255, 0);
    }
    40% {
      box-shadow: 2px -40px rgba(255, 255, 255, 0.5), 8px -30px rgba(255, 255, 255, 0.4), 8px -60px rgba(255, 255, 255, 0.5), 12px -15px rgba(255, 255, 255, 0.5);
    }
    60% {
      box-shadow: 4px -60px rgba(255, 255, 255, 0.5), 6px -50px rgba(255, 255, 255, 0.4), 10px -90px rgba(255, 255, 255, 0.5), 15px -25px rgba(255, 255, 255, 0.5);
    }
    80% {
      box-shadow: 2px -80px rgba(255, 255, 255, 0.5), 4px -70px rgba(255, 255, 255, 0.4), 8px -120px rgba(255, 255, 255, 0), 12px -35px rgba(255, 255, 255, 0.5);
    }
    100% {
      box-shadow: 4px -100px rgba(255, 255, 255, 0), 8px -90px rgba(255, 255, 255, 0), 10px -120px rgba(255, 255, 255, 0), 15px -45px rgba(255, 255, 255, 0);
    }
  }
  @keyframes animloader98s {
    0% {
      box-shadow: 4px -10px rgba(255, 255, 255, 0), 6px 0px rgba(255, 255, 255, 0), 8px -15px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0);
    }
    20% {
      box-shadow: 4px -20px rgba(255, 255, 255, 0), 8px -10px rgba(255, 255, 255, 0), 10px -30px rgba(255, 255, 255, 0.5), 15px -5px rgba(255, 255, 255, 0);
    }
    40% {
      box-shadow: 2px -40px rgba(255, 255, 255, 0.5), 8px -30px rgba(255, 255, 255, 0.4), 8px -60px rgba(255, 255, 255, 0.5), 12px -15px rgba(255, 255, 255, 0.5);
    }
    60% {
      box-shadow: 4px -60px rgba(255, 255, 255, 0.5), 6px -50px rgba(255, 255, 255, 0.4), 10px -90px rgba(255, 255, 255, 0.5), 15px -25px rgba(255, 255, 255, 0.5);
    }
    80% {
      box-shadow: 2px -80px rgba(255, 255, 255, 0.5), 4px -70px rgba(255, 255, 255, 0.4), 8px -120px rgba(255, 255, 255, 0), 12px -35px rgba(255, 255, 255, 0.5);
    }
    100% {
      box-shadow: 4px -100px rgba(255, 255, 255, 0), 8px -90px rgba(255, 255, 255, 0), 10px -120px rgba(255, 255, 255, 0), 15px -45px rgba(255, 255, 255, 0);
    }
  }
  @-webkit-keyframes animloader99 {
    0% {
      box-shadow: 0px 0px inset;
    }
    100% {
      box-shadow: 0px -80px inset;
    }
  }
  @keyframes animloader99 {
    0% {
      box-shadow: 0px 0px inset;
    }
    100% {
      box-shadow: 0px -80px inset;
    }
  }
  @-webkit-keyframes animloader100 {
    0% {
      box-shadow: 25px 0 white, 50px 0 white, 75px 0 white, 100px 0 white, 125px 0 white, 150px 0 white, 25px 0 white, 50px 0 white, 75px 0 white, 100px 0 white, 125px 0 white, 150px 0 white;
    }
    50% {
      box-shadow: 25px 20px white, 50px 60px rgba(255, 255, 255, 0), 75px 30px rgba(255, 255, 255, 0), 100px 70px rgba(255, 255, 255, 0), 125px 40px white, 150px 60px rgba(255, 255, 255, 0), 25px 20px white, 50px 30px white, 75px 10px white, 100px 30px white, 125px 30px rgba(255, 255, 255, 0), 150px 30px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 25px 60px rgba(255, 255, 255, 0), 50px 60px rgba(255, 255, 255, 0), 75px 50px rgba(255, 255, 255, 0), 100px 70px rgba(255, 255, 255, 0), 125px 70px rgba(255, 255, 255, 0), 150px 60px rgba(255, 255, 255, 0), 25px 80px rgba(255, 255, 255, 0), 50px 80px rgba(255, 255, 255, 0), 75px 70px rgba(255, 255, 255, 0), 100px 60px rgba(255, 255, 255, 0), 125px 30px rgba(255, 255, 255, 0), 150px 30px rgba(255, 255, 255, 0);
    }
  }
  @keyframes animloader100 {
    0% {
      box-shadow: 25px 0 white, 50px 0 white, 75px 0 white, 100px 0 white, 125px 0 white, 150px 0 white, 25px 0 white, 50px 0 white, 75px 0 white, 100px 0 white, 125px 0 white, 150px 0 white;
    }
    50% {
      box-shadow: 25px 20px white, 50px 60px rgba(255, 255, 255, 0), 75px 30px rgba(255, 255, 255, 0), 100px 70px rgba(255, 255, 255, 0), 125px 40px white, 150px 60px rgba(255, 255, 255, 0), 25px 20px white, 50px 30px white, 75px 10px white, 100px 30px white, 125px 30px rgba(255, 255, 255, 0), 150px 30px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 25px 60px rgba(255, 255, 255, 0), 50px 60px rgba(255, 255, 255, 0), 75px 50px rgba(255, 255, 255, 0), 100px 70px rgba(255, 255, 255, 0), 125px 70px rgba(255, 255, 255, 0), 150px 60px rgba(255, 255, 255, 0), 25px 80px rgba(255, 255, 255, 0), 50px 80px rgba(255, 255, 255, 0), 75px 70px rgba(255, 255, 255, 0), 100px 60px rgba(255, 255, 255, 0), 125px 30px rgba(255, 255, 255, 0), 150px 30px rgba(255, 255, 255, 0);
    }
  }
  @-webkit-keyframes animloader105 {
    0% {
      height: 64px;
    }
    90%, 100% {
      height: 0px;
    }
  }
  @keyframes animloader105 {
    0% {
      height: 64px;
    }
    90%, 100% {
      height: 0px;
    }
  }
  @-webkit-keyframes animloader106back {
    0%, 30%, 70% {
      transform: translateY(0px);
    }
    20%, 40%, 100% {
      transform: translateY(-5px);
    }
  }
  @keyframes animloader106back {
    0%, 30%, 70% {
      transform: translateY(0px);
    }
    20%, 40%, 100% {
      transform: translateY(-5px);
    }
  }
  @-webkit-keyframes animloader106 {
    0% {
      box-shadow: 4px 4px 12px 2px rgba(255, 61, 0, 0.75);
      width: 34px;
      height: 34px;
      background-position: -44px -44px;
      background-size: 100px 100px;
    }
    100% {
      box-shadow: 2px 2px 8px 0px rgba(255, 61, 0, 0.5);
      width: 30px;
      height: 28px;
      background-position: -36px -36px;
      background-size: 80px 80px;
    }
  }
  @keyframes animloader106 {
    0% {
      box-shadow: 4px 4px 12px 2px rgba(255, 61, 0, 0.75);
      width: 34px;
      height: 34px;
      background-position: -44px -44px;
      background-size: 100px 100px;
    }
    100% {
      box-shadow: 2px 2px 8px 0px rgba(255, 61, 0, 0.5);
      width: 30px;
      height: 28px;
      background-position: -36px -36px;
      background-size: 80px 80px;
    }
  }
  @-webkit-keyframes animloader108 {
    0% {
      box-shadow: 0 0 0 -2px, 0 0 0 -2px, 0 0 0 -5px, 0 0 0 -5px;
    }
    20% {
      box-shadow: 40px -1px 0 -2px, 0 0 0 -2px, 40px -1px 0 -5px, 0 0 0 -5px;
    }
    40% {
      box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 40px -1px 0 -5px, -40px -1px 0 -5px;
    }
    60% {
      box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 23px -29px 0 -5px, -40px -1px 0 -5px;
    }
    80%, 95% {
      box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 23px -29px 0 -5px, -23px -29px 0 -5px;
    }
    100% {
      box-shadow: 40px -1px 0 -2px rgba(255, 255, 255, 0), -40px -1px 0 -2px rgba(255, 255, 255, 0), 23px -29px 0 -5px rgba(255, 255, 255, 0), -23px -29px 0 -5px rgba(255, 255, 255, 0);
    }
  }
  @keyframes animloader108 {
    0% {
      box-shadow: 0 0 0 -2px, 0 0 0 -2px, 0 0 0 -5px, 0 0 0 -5px;
    }
    20% {
      box-shadow: 40px -1px 0 -2px, 0 0 0 -2px, 40px -1px 0 -5px, 0 0 0 -5px;
    }
    40% {
      box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 40px -1px 0 -5px, -40px -1px 0 -5px;
    }
    60% {
      box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 23px -29px 0 -5px, -40px -1px 0 -5px;
    }
    80%, 95% {
      box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 23px -29px 0 -5px, -23px -29px 0 -5px;
    }
    100% {
      box-shadow: 40px -1px 0 -2px rgba(255, 255, 255, 0), -40px -1px 0 -2px rgba(255, 255, 255, 0), 23px -29px 0 -5px rgba(255, 255, 255, 0), -23px -29px 0 -5px rgba(255, 255, 255, 0);
    }
  }
  @-webkit-keyframes animloader108s {
    0% {
      box-shadow: 0 0 0 -2px, 0 0 0 -2px, 0 0 0 -5px, 0 0 0 -5px;
    }
    20% {
      box-shadow: 40px 2px 0 -2px, 0 0 0 -2px, 40px 2px 0 -5px, 0 0 0 -5px;
    }
    40% {
      box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 40px 2px 0 -5px, -40px 2px 0 -5px;
    }
    60% {
      box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 23px -23px 0 -5px, -40px 2px 0 -5px;
    }
    80%, 95% {
      box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 23px -23px 0 -5px, -23px -23px 0 -5px;
    }
    100% {
      box-shadow: 40px 2px 0 -2px rgba(255, 255, 255, 0), -40px 2px 0 -2px rgba(255, 255, 255, 0), 23px -23px 0 -5px rgba(255, 255, 255, 0), -23px -23px 0 -5px rgba(255, 255, 255, 0);
    }
  }
  @keyframes animloader108s {
    0% {
      box-shadow: 0 0 0 -2px, 0 0 0 -2px, 0 0 0 -5px, 0 0 0 -5px;
    }
    20% {
      box-shadow: 40px 2px 0 -2px, 0 0 0 -2px, 40px 2px 0 -5px, 0 0 0 -5px;
    }
    40% {
      box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 40px 2px 0 -5px, -40px 2px 0 -5px;
    }
    60% {
      box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 23px -23px 0 -5px, -40px 2px 0 -5px;
    }
    80%, 95% {
      box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 23px -23px 0 -5px, -23px -23px 0 -5px;
    }
    100% {
      box-shadow: 40px 2px 0 -2px rgba(255, 255, 255, 0), -40px 2px 0 -2px rgba(255, 255, 255, 0), 23px -23px 0 -5px rgba(255, 255, 255, 0), -23px -23px 0 -5px rgba(255, 255, 255, 0);
    }
  }
  @-webkit-keyframes animloader115 {
    0% {
      box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 10px 0 white, 20px 0 rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 10px 0 white, 20px 0 white;
    }
  }
  @keyframes animloader115 {
    0% {
      box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 10px 0 white, 20px 0 rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 10px 0 white, 20px 0 white;
    }
  }
  @-webkit-keyframes animloader116 {
    0% {
      top: 8px;
      transform: rotate(0deg) scale(1);
    }
    100% {
      top: 0px;
      transform: rotate(180deg) scale(1.5);
    }
  }
  @keyframes animloader116 {
    0% {
      top: 8px;
      transform: rotate(0deg) scale(1);
    }
    100% {
      top: 0px;
      transform: rotate(180deg) scale(1.5);
    }
  }
  @-webkit-keyframes animloader117 {
    0% {
      box-shadow: 0 0 inset;
    }
    100% {
      box-shadow: 0 -28px inset;
    }
  }
  @keyframes animloader117 {
    0% {
      box-shadow: 0 0 inset;
    }
    100% {
      box-shadow: 0 -28px inset;
    }
  }
  @-webkit-keyframes animMarker {
    0% {
      transform: rotate(45deg) translate(5px, 5px);
    }
    100% {
      transform: rotate(45deg) translate(-5px, -5px);
    }
  }
  @keyframes animMarker {
    0% {
      transform: rotate(45deg) translate(5px, 5px);
    }
    100% {
      transform: rotate(45deg) translate(-5px, -5px);
    }
  }
  @-webkit-keyframes animShadow {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes animShadow {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @-webkit-keyframes bump {
    0% {
      transform: translate(-50%, 5px);
    }
    100% {
      transform: translate(-50%, -5px);
    }
  }
  @keyframes bump {
    0% {
      transform: translate(-50%, 5px);
    }
    100% {
      transform: translate(-50%, -5px);
    }
  }
  @-webkit-keyframes animPend {
    0% {
      transform: rotate(22deg);
    }
    50% {
      transform: rotate(0deg);
    }
  }
  @keyframes animPend {
    0% {
      transform: rotate(22deg);
    }
    50% {
      transform: rotate(0deg);
    }
  }
  @-webkit-keyframes animPend2 {
    0%, 55% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-22deg);
    }
  }
  @keyframes animPend2 {
    0%, 55% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-22deg);
    }
  }
  @-webkit-keyframes animloader85 {
    0%, 100% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(150%);
    }
  }
  @keyframes animloader85 {
    0%, 100% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(150%);
    }
  }
  @-webkit-keyframes barStripe {
    0% {
      background-position: 1em 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  @keyframes barStripe {
    0% {
      background-position: 1em 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  @-webkit-keyframes raceBoard {
    0% {
      background-position: 0 0, 16px 16px;
    }
    100% {
      background-position: 32px 0px, 48px 16px;
    }
  }
  @keyframes raceBoard {
    0% {
      background-position: 0 0, 16px 16px;
    }
    100% {
      background-position: 32px 0px, 48px 16px;
    }
  }
  @-webkit-keyframes fadePush {
    0% {
      transform: translate(-50%, -15px);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, 0px);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 15px);
      opacity: 0;
    }
  }
  @keyframes fadePush {
    0% {
      transform: translate(-50%, -15px);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, 0px);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 15px);
      opacity: 0;
    }
  }
  @-webkit-keyframes fadePull {
    0% {
      transform: translate(-50%, 15px);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, 0px);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -15px);
      opacity: 0;
    }
  }
  @keyframes fadePull {
    0% {
      transform: translate(-50%, 15px);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, 0px);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -15px);
      opacity: 0;
    }
  }
  @-webkit-keyframes hitZak {
    0% {
      left: 0;
      transform: translateX(-1%);
    }
    100% {
      left: 100%;
      transform: translateX(-99%);
    }
  }
  @keyframes hitZak {
    0% {
      left: 0;
      transform: translateX(-1%);
    }
    100% {
      left: 100%;
      transform: translateX(-99%);
    }
  }
  @-webkit-keyframes animFw {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  @keyframes animFw {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  @-webkit-keyframes coli1 {
    0% {
      transform: rotate(-45deg) translateX(0px);
      opacity: 0.7;
    }
    100% {
      transform: rotate(-45deg) translateX(-45px);
      opacity: 0;
    }
  }
  @keyframes coli1 {
    0% {
      transform: rotate(-45deg) translateX(0px);
      opacity: 0.7;
    }
    100% {
      transform: rotate(-45deg) translateX(-45px);
      opacity: 0;
    }
  }
  @-webkit-keyframes coli2 {
    0% {
      transform: rotate(45deg) translateX(0px);
      opacity: 1;
    }
    100% {
      transform: rotate(45deg) translateX(-45px);
      opacity: 0.7;
    }
  }
  @keyframes coli2 {
    0% {
      transform: rotate(45deg) translateX(0px);
      opacity: 1;
    }
    100% {
      transform: rotate(45deg) translateX(-45px);
      opacity: 0.7;
    }
  }
  @-webkit-keyframes animloader121 {
    0% {
      background-position: 0% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
    }
    100% {
      background-position: 100% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
    }
  }
  @keyframes animloader121 {
    0% {
      background-position: 0% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
    }
    100% {
      background-position: 100% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
    }
  }
  @-webkit-keyframes animloader123 {
    0% {
      background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
    }
    100% {
      background-position: 100% 0, 120px 0, 120px 40px, 120px 80px;
    }
  }
  @keyframes animloader123 {
    0% {
      background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
    }
    100% {
      background-position: 100% 0, 120px 0, 120px 40px, 120px 80px;
    }
  }
  @-webkit-keyframes animloader124 {
    0% {
      background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
    }
    100% {
      background-position: 150% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
    }
  }
  @keyframes animloader124 {
    0% {
      background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
    }
    100% {
      background-position: 150% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
    }
  }
  @-webkit-keyframes animloader126 {
    0% {
      background-position: 0 0, 0 0, 0px 85px, 0px 110px;
    }
    100% {
      background-position: 150% 0, 0 0, 0px 85px, 0px 110px;
    }
  }
  @keyframes animloader126 {
    0% {
      background-position: 0 0, 0 0, 0px 85px, 0px 110px;
    }
    100% {
      background-position: 150% 0, 0 0, 0px 85px, 0px 110px;
    }
  }
  @-webkit-keyframes floating {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-25px);
    }
  }
  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-25px);
    }
  }
  @-webkit-keyframes animloader110 {
    0% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  }
  @keyframes animloader110 {
    0% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  }
  @-webkit-keyframes animloader111 {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  @keyframes animloader111 {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  @-webkit-keyframes animloader113 {
    0% {
      transform: translate(0px, 0px) scaleX(1);
    }
    14% {
      transform: translate(-12px, -16px) scaleX(1.05);
    }
    28% {
      transform: translate(-27px, -28px) scaleX(1.07);
    }
    42% {
      transform: translate(-46px, -35px) scaleX(1.1);
    }
    57% {
      transform: translate(-70px, -37px) scaleX(1.1);
    }
    71% {
      transform: translate(-94px, -32px) scaleX(1.07);
    }
    85% {
      transform: translate(-111px, -22px) scaleX(1.05);
    }
    100% {
      transform: translate(-125px, -9px) scaleX(1);
    }
  }
  @keyframes animloader113 {
    0% {
      transform: translate(0px, 0px) scaleX(1);
    }
    14% {
      transform: translate(-12px, -16px) scaleX(1.05);
    }
    28% {
      transform: translate(-27px, -28px) scaleX(1.07);
    }
    42% {
      transform: translate(-46px, -35px) scaleX(1.1);
    }
    57% {
      transform: translate(-70px, -37px) scaleX(1.1);
    }
    71% {
      transform: translate(-94px, -32px) scaleX(1.07);
    }
    85% {
      transform: translate(-111px, -22px) scaleX(1.05);
    }
    100% {
      transform: translate(-125px, -9px) scaleX(1);
    }
  }
  @-webkit-keyframes animloader113L {
    0% {
      box-shadow: 0 -6px, -122.9px -8px;
    }
    25%, 75% {
      box-shadow: 0 0px, -122.9px -8px;
    }
    100% {
      box-shadow: 0 0px, -122.9px -16px;
    }
  }
  @keyframes animloader113L {
    0% {
      box-shadow: 0 -6px, -122.9px -8px;
    }
    25%, 75% {
      box-shadow: 0 0px, -122.9px -8px;
    }
    100% {
      box-shadow: 0 0px, -122.9px -16px;
    }
  }
  @-webkit-keyframes animloader114 {
    0% {
      transform: translateY(8px) scaleY(1) scaleX(1.25);
    }
    25%, 75% {
      transform: translateY(-5px) scaleY(1.2) scaleX(1);
    }
    50% {
      transform: translateY(-10px) scaleY(1) scaleX(1);
    }
    100% {
      transform: translateY(8px) scaleY(0.8) scaleX(0.8);
    }
  }
  @keyframes animloader114 {
    0% {
      transform: translateY(8px) scaleY(1) scaleX(1.25);
    }
    25%, 75% {
      transform: translateY(-5px) scaleY(1.2) scaleX(1);
    }
    50% {
      transform: translateY(-10px) scaleY(1) scaleX(1);
    }
    100% {
      transform: translateY(8px) scaleY(0.8) scaleX(0.8);
    }
  }
  @-webkit-keyframes animloader118 {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1.2);
    }
  }
  @keyframes animloader118 {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1.2);
    }
  }
  @-webkit-keyframes animloader119 {
    0% {
      filter: blur(0px);
      transform: skew(0deg);
    }
    100% {
      filter: blur(3px);
      transform: skew(-4deg);
    }
  }
  @keyframes animloader119 {
    0% {
      filter: blur(0px);
      transform: skew(0deg);
    }
    100% {
      filter: blur(3px);
      transform: skew(-4deg);
    }
  }
`;
}