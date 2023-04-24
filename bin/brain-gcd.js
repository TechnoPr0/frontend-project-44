#!/usr/bin/env node

import { game } from '../src/index.js';
import { gcdLogic, question } from '../src/games/gcd.js';

game(gcdLogic, question);
