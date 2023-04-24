#!/usr/bin/env node

import { game } from '../src/index.js';
import { primeLogic, question } from '../src/games/prime.js';

game(primeLogic, question);
