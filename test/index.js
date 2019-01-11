'use strict'

import tap   from 'tap'
import round from '../index.js'


tap.equal(round(3.0), 3)
tap.equal(round(3.1), 3)
tap.equal(round(3.2), 3)
tap.equal(round(3.3), 3)
tap.equal(round(3.4), 3)
tap.equal(round(3.5), 4)
tap.equal(round(3.6), 4)
tap.equal(round(3.7), 4)
tap.equal(round(3.8), 4)
tap.equal(round(3.9), 4)

tap.equal(round(-3.0), -3)
tap.equal(round(-3.1), -3)
tap.equal(round(-3.2), -3)
tap.equal(round(-3.3), -3)
tap.equal(round(-3.4), -3)
tap.equal(round(-3.5), -4)
tap.equal(round(-3.6), -4)
tap.equal(round(-3.7), -4)
tap.equal(round(-3.8), -4)
tap.equal(round(-3.9), -4)
