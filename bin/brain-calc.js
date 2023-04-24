#!/usr/bin/env node

import { calcLogic, question } from '../src/games/calc.js';
import { game } from '../src/index.js';

game(calcLogic, question);
